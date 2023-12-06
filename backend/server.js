const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const restaurantRoutes = require("./routes/restaurants");
const userRoutes = require("./routes/users");
const mongoose = require("mongoose");

// Middleware.
app.use(express.json()); // This looks for if the request has data in it, and if it does it will attach to the req variable.
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Using restaurant routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/users", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening for requests at a certain port
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log("Connected to DB and listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
