const router = require("express").Router();
const { createEvent } = require("../controllers/eventController");
const protectShop = require("../middlewares/shopMiddleware");

router.post("/create-event", protectShop, createEvent);

module.exports = router;
