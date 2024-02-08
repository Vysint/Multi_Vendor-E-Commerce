const router = require("express").Router();
const { createEvent, getEvents } = require("../controllers/eventController");
const protectShop = require("../middlewares/shopMiddleware");

router.post("/create-event", protectShop, createEvent);

router.get("/", protectShop, getEvents);

module.exports = router;
