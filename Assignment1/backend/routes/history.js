const express = require("express");
const chatLogModel = require("../models/chatLog");

const router = express.Router();

router.get("", (req, res, next) => {
    console.log("GET: Chat Logs");

    chatLogModel.find({}, function(err, log){
        let chatLogMap = [];

        chatLogMap.push(log);

        res.send(chatLogMap);

        console.log(chatLogMap);
    });
})

router.post("/", (req, res, next) => {
    console.log(`POST: Chat Log named ${req.body.room} if doesn't exist`);
    console.log(req.body.room);

    chatLogModel.findOne({"room": req.body.room}, req.body, {upsert: true}, (err, chatroom) => {
        if(err) console.log(err);
        console.log(req.body);
        if(chatroom === null){
            chatLogModel.create(req.body, function(err){
                if(err) console.log(err);
            })
        }
    })
})

module.exports = router;