const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    num_reviews: {
      type: String,
      required: true,
    },
    location_string: {
      type: String,
      required: true,
    },
    photo: Object,
    rating: {
      type: String,
      required: true,
    },
    price_level: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    web_url: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cuisine: {
      type: Array,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    user_reviews: {
      type: Array,
      required: true,
    },
  },
  { collection: "menumaster_restaurants" }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
