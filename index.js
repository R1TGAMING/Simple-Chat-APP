const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http').Server(app);
const path = require('path');

const io = require("socket.io")(http);

let totalUserOnline = 0

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/templates", 'index.html'))
})


io.on( 'connection', (socket) => {
  socket.on("chat-masuk", (msg) => {
    io.emit("chat-keluar", msg);
  })
  
  totalUserOnline++
  io.emit("user-online", totalUserOnline)
  
  socket.on("disconnect", () => {
    totalUserOnline--
    io.emit("user-online", totalUserOnline)
  })
})

http.listen(3000, () => {
  console.log('server started');
})