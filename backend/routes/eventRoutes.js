const router = require("express").Router();
const {
  createEvent,
  deleteEvent,
  getEvents,
} = require("../controllers/eventController");
const protectShop = require("../middlewares/shopMiddleware");

router.post("/create-event", protectShop, createEvent);

router.get("/", protectShop, getEvents);

router.delete("/:id", protectShop, deleteEvent);

module.exports = router;
