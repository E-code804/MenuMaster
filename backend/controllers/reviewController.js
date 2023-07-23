const { format } = require("date-fns");
const Review = require("../models/ReviewModel");
const Restaurant = require("../models/RestaurantModel");
const { v4: uuidv4 } = require("uuid");

// TODO make the restaurant schema an import data there.

// These kind of functions will replace the traditional
// (req, res) in the routes folder

// get all restaurants
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.status(200).json(restaurants);
};

// get a single restaurant
const getOneRestaurant = async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurant.findById(id);
  res.status(200).json(restaurant);
};

// create a new review
const createReview = async (req, res) => {
  const { userName, writtenReview, ratingReview } = req.body;
  const id = req.params.id;
  const rest = await Restaurant.findById(id);
  const revId = uuidv4();

  // add doc to db
  try {
    const review = {
      revId,
      userName,
      writtenReview,
      ratingReview,
      createdAt: format(new Date(), "yyyy-MM-dd"),
    };
    rest.user_reviews.push(review);
    await rest.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a review

// update a review
const updateReview = async (req, res) => {
  const id1 = req.params.id1;
  const id2 = req.params.id2;

  Restaurant.updateOne(
    {
      _id: id1,
      "user_reviews.revId": id2,
    },
    {
      $set: { "user_reviews.$.ratingReview": 5 },
    }
  )
    .then((result) => {
      console.log(result);
      if (result.modifiedCount > 0) {
        res.status(200).json({ msg: "Updated" });
      } else {
        res.status(404).json({ msg: "Not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

module.exports = {
  createReview,
  getRestaurants,
  updateReview,
};
