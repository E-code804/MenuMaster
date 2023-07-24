const express = require("express");
const router = express.Router();
const {
  createReview,
  getRestaurants,
  updateReview,
  getOneRestaurant,
  deleteReview,
} = require("../controllers/reviewController");

// Get all restaurants
router.get("/", getRestaurants);

// Get a single restaurant.
router.get("/:id", getOneRestaurant);

// Post a restaurant review.
router.post("/:id", createReview);

// Delete a restaurant review.
router.delete("/:id1/:id2", deleteReview);

// Update a restaurant review.
router.patch("/:id1/:id2", updateReview);

module.exports = router;
