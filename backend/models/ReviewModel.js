const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    writtenReview: {
      type: String,
      required: true,
    },
    ratingReview: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
