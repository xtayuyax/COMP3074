const express = require("express");
const eventModel = require("../models/eventLog")

const router = express.Router();

router.get("", (req, res, next) => {
    console.log("GET: Chat Logs");

    eventModel.find({}, function(err, log){
        var eventMap = [];

        eventMap.push(log);

        res.send(eventMap);
    })

    eventModel.find({})
})

router.post('/', (req, res, next) => {

    console.log('CREATE: Event');
  
    // Create Player
    eventModel.create(req.body, function(err){
      if (err){
        console.log(err);
      }
      console.log(req.body);
      res.send(req.body);
    })
})

module.exports = router;