const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/userController");

// get a single user
router.get("/:userName", getUser);

// create a user
router.post("/", createUser);

module.exports = router;
