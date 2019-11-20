//Itinerary router

const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:city_id", (req, res) => {
  let itineraryRequested = req.params.city_id;

  itineraryModel
    .findOne({ city_id: itineraryRequested })
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});
module.exports = router;
