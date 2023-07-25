const { format } = require("date-fns");
// const Review = require("../models/ReviewModel");
const Restaurant = require("../models/RestaurantModel");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// These kind of functions will replace the traditional
// (req, res) in the routes folder

// get all restaurants
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({});
  // Sending an array of docs from DB, so when fetching this
  // You must convert to json. i.e: json = await res.json()
  res.status(200).json(restaurants);
};

// get a single restaurant
const getOneRestaurant = async (req, res) => {
  const { id } = req.params;
  // Make sure id is a valid mongodb id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }
  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    return res.status(404).json({ error: "No such restaurant" });
  }
  res.status(200).json(restaurant);
};

// create a new review
const createReview = async (req, res) => {
  const { userName, writtenReview, ratingReview } = req.body;
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  const rest = await Restaurant.findById(id);
  const revId = uuidv4();

  if (!rest) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  // add doc to db
  try {
    const review = {
      revId,
      userName,
      writtenReview,
      ratingReview,
      createdAt: format(new Date(), "yyyy-MM-dd"),
    };
    // When a new review is created, we must update its rating and the number of reviews.
    const currentRating = parseFloat(rest.rating);
    const currentNumReviews = parseInt(rest.num_reviews);
    const newRating =
      (currentRating * currentNumReviews + ratingReview) /
      (currentNumReviews + 1);
    // console.log(currentRating);
    // console.log(currentNumReviews);
    // console.log(currentRating * currentNumReviews);
    // console.log(ratingReview);
    // console.log(currentNumReviews + 1);
    // console.log(newRating);

    const restaurant = await Restaurant.findOneAndUpdate(
      { _id: id },
      {
        rating: newRating.toFixed(1).toString(),
        num_reviews: (currentNumReviews + 1).toString(),
      }
    );

    if (!restaurant) {
      return res.status(404).json({ error: "No such restaurant" });
    }

    rest.user_reviews.push(review);
    await rest.save();
    const numReview = currentNumReviews + 1;
    res.status(200).json({ review, newRating, numReview });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a review
const deleteReview = async (req, res) => {
  const { id1, id2 } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id1)) {
    return res.status(404).json({ error: "No such restaurant or review" });
  }

  const currentRestaurant = await Restaurant.findById(id1);

  if (!currentRestaurant) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  // When deleting a review, we must update its rating and number of reviews.
  const currentRating = parseFloat(currentRestaurant.rating);
  const currentNumReviews = parseInt(currentRestaurant.num_reviews);

  Restaurant.findOne({ _id: id1 })
    .then((foundRestaurant) => {
      if (foundRestaurant) {
        const userReview = foundRestaurant.user_reviews.find(
          (review) => review.revId === id2
        );
        if (userReview) {
          const oldRating = userReview.ratingReview;
          const newRating = // make a var for ratingView that is 0 in this scenario for func refactor.
            (currentRating * currentNumReviews - oldRating) /
            (currentNumReviews - 1);
          console.log(newRating);
          Restaurant.updateOne(
            { _id: id1 },
            {
              $set: {
                rating: newRating.toFixed(1).toString(),
                num_reviews: (currentNumReviews - 1).toString(),
              },
              $pull: { user_reviews: { revId: id2 } },
            }
          )
            .then((result) => {
              const numReviews = currentNumReviews - 1;
              if (result.modifiedCount > 0) {
                res.status(200).json({ id2, newRating, numReviews });
              } else {
                res.status(404).json({ err: "Could not update review." });
              }
            })
            .catch((err) => {
              res.status(500).json({ error: err.message });
            });
        } else {
          return res
            .status(404)
            .json({ msg: "Review with the given revId not found." });
        }
      } else {
        return res
          .status(404)
          .json({ msg: "Restaurant with the given _id not found." });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

// update a review
const updateReview = async (req, res) => {
  const { id1, id2 } = req.params;
  const { writtenReview, ratingReview } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id1)) {
    return res.status(404).json({ error: "No such restaurant." });
  }

  // make below a function and check if new rating is btwn 1-5.
  const rest = await Restaurant.findById(id1);
  if (!rest) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  const currentRating = parseFloat(rest.rating);
  const numReviews = parseInt(rest.num_reviews);

  Restaurant.findOne({ _id: id1, "user_reviews.revId": id2 })
    .then((foundRestaurant) => {
      if (foundRestaurant) {
        const userReview = foundRestaurant.user_reviews.find(
          (review) => review.revId === id2
        );
        if (userReview) {
          const oldRating = userReview.ratingReview;
          const newRating =
            (currentRating * numReviews - oldRating + ratingReview) /
            numReviews;
          console.log(newRating);
          Restaurant.findByIdAndUpdate(id1, { rating: newRating.toString() });
        } else {
          return res
            .status(404)
            .json({ msg: "Review with the given revId not found." });
        }
      } else {
        return res
          .status(404)
          .json({ msg: "Restaurant with the given _id not found." });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });

  Restaurant.updateOne(
    {
      _id: id1,
      "user_reviews.revId": id2,
    },
    {
      $set: {
        "user_reviews.$.ratingReview": ratingReview,
        "user_reviews.$.writtenReview": writtenReview,
      },
    }
  )
    .then((result) => {
      if (result.modifiedCount > 0) {
        res.status(200).json({ msg: "Updated" });
      } else {
        res.status(404).json({ error: "No such review found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports = {
  createReview,
  getRestaurants,
  updateReview,
  getOneRestaurant,
  deleteReview,
};
