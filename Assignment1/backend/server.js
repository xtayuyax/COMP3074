const express = require('express');
const socket = require("socket.io");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const http = require("http").Server(app);
const io = socket(http);

app.use(bodyParser.json());

//Routes
const eventRoutes = require("./routes/eventLogs");
const historyRoutes = require("./routes/history");
const roomRoutes = require("./routes/roomHistory")

//Connect to Mongo

console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://admin:yue5yun5@ds255784.mlab.com:55784/chatroom_db')
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');

    next();
});

//Set up API routes
app.use("/api/history", historyRoutes);
app.use("/api/roomhistory", roomRoutes);
app.use("/api/eventlog", eventRoutes);

let username = "";
let room = "";

io.on('connection', function(socket){

  let handshake = socket.handshake;

  socket.on("connectMessage", data => {
    username = data;
    console.log(`${handshake.time}${username} has connected`);
  })

  socket.on("joinRoom", data => {
    socket.join(data);
    room = data;
    io.to(room).emit("joinMessage", {message: `A wild ${username} has appeared!`, room: room});
    console.log(`${handshake.time} ${username} has joined ${room}`);
  })

  socket.on('disconnectMessage', data => {
    console.log(`${handshake.time} ${username} has disconnected`);    
  });

  socket.on("message", data => {
    io.to(room).emit("chatMessage", {time: handshake, user: data.user, message: ` : ${data.message}`} );
    console.log(room);
    console.log(data);
  })

  socket.on("leaveRoom", data => {
    io.to(room).emit("leaveMessage", {message: `${username} has left the chat`, room: data});
    socket.leave(data);
    console.log(`${handshake.time} ${username} has left ${data}`);
  })

  socket.on("typing", data => {
    if(data){
      io.to(room).emit("typingMessage", `${data} is currently typing`)
    }
    else{
      io.to(room).emit("typingMessage", "");
    }
  })
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

module.exports = app;