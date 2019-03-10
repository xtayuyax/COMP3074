
const express = require("express");
const chatLogModel = require("../models/chatLog")

const router = express.Router()

router.get('/:name', (req, res, next) => {

    console.log('GET: Chat Log by name:' + req.params.name);

    chatLogModel.findOne({room: req.params.name}, function(err, log){
        if (err) console.log(err);
        console.log(log);
        res.send(log);
    })
  
})

router.put('/', (req, res, next) => {

    console.log(`Create message in ${req.body.room}`);

    chatLogModel.findOneAndUpdate({"room": req.body.room}, 
        {$push: {messages: req.body}}, function(err){
            if (err) console.log(err);
            console.log(req.body)
            res.send(req.body);
    })
})

module.exports = router;