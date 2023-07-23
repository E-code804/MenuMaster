const express = require("express");
const router = express.Router();
const {
  createReview,
  getRestaurants,
  updateReview,
} = require("../controllers/reviewController");

// Get all restaurants
router.get("/", getRestaurants);

// Get a single restaurant.
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a restaurant." });
});

// Post a restaurant review.
router.post("/:id", createReview);

// Delete a restaurant review.
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a restaurant review" });
});

// Update a restaurant review.
router.patch("/:id1/:id2", updateReview);

module.exports = router;
