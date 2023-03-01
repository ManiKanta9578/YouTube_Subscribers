const express = require("express");

//importing from controllers
const {
    getSubscriber,
    getSubscribers,
    getSubscribersNames,
    createSubscribers,
    deleteSubscriber,
    updateSubscriber
} = require("../controllers/subscriberController")

const router = express.Router();

//GET all subscribers
router.route("/subscribers").get(getSubscribers);

//GET all subscribers names
router.route("/subscribers/names").get(getSubscribersNames);

//GET a single request by id
router.route("/subscribers/:id").get(getSubscriber);

//Create a subscriber
router.route("/subscribers").post(createSubscribers);

//Delete a subscriber by id
router.route("/subscribers/:id").delete(deleteSubscriber);

//update a subscribers by id
router.route("/subscribers/:id").patch(updateSubscriber);


// exports
module.exports = router;