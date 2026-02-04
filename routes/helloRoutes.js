const express = require("express");
const router = express.Router();

const helloController = require("../controllers/helloController");

// GET /api/hello
router.get("/", helloController.sayHello);

module.exports = router;
