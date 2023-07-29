const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const restaurantRoutes = require("./routes/restaurants");
const userRoutes = require("./routes/users");
const mongoose = require("mongoose");

// Middleware.
app.use(express.json()); // This looks for if the request has data in it, and if it does it will attach to the req variable.
app.use(
  cors({
    origin: ["https://menu-master-ten.vercel.app/"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  // This func fires for every request that comes in.
  // Must call the "next" function in order to move onto next piece of middleware.
  console.log(req.path, req.method);
  next();
});

// Reacting to requests. This is on url: 4000/
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to the app" });
// });

// Using restaurant routes
app.use("/api/restaurants", restaurantRoutes); // url looks like /api/restaurants/SPECIFIC_ROUTE_FROM_ROUTER
app.use("/api/users", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening for requests at a certain port
    if (process.env.PORT) {
      app.listen(process.env.PORT, () => {
        console.log("Connected to DB and listening on port", process.env.PORT);
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
// const { v4: uuidv4 } = require("uuid");
// const id = uuidv4();
// console.log(id);
module.exports = app;
