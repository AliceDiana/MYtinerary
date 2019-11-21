const express = require("express");
const router = express.Router();
const activityModel = require("../model/activityModel");

router.get("/all", (req, res) => {
  console.log("in activities al");

  activityModel
    .find()
    .then(files => {
      console.log(files);
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:itinerary_id", (req, res) => {
  console.log("in");

  let activityRequested = req.params.itinerary_id;

  activityModel
    .find({ itinerary_id: activityRequested })
    .then(activities => {
      res.send(activities);
    })
    .catch(err => console.log(err));
});
module.exports = router;
