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
    .find({ city_id: itineraryRequested })
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});
module.exports = router;
