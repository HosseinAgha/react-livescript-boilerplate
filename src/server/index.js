"use strict"

let express = require('express')
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
// let fileReadWrite = require('fileReadWrite');

let count = 0;
let users = {
  done: [],
  unDone: []
}

io.on('connection', (socket) => {

  socket.on("toggleuser", (username) => {
    let isDone = isUserDone(username);
    toggleUser(isDone, username);
    io.sockets.emit("userStatus", { users: users });
  });

  socket.on("userjoin", (username) => {
    removeExistingUser(username);
    let newUser = {
      name: username,
      id: Date.now()
    }
    
    users.unDone = users.unDone.concat(newUser)

    let response = {
      users: users,
      yourUser: newUser
    }
    socket.emit("userStatus", response)
    socket.broadcast.emit("userStatus", { users: users });
  })

  socket.on('disconnect', () => {
  })

})

function removeExistingUser(username) {
  users.unDone = users.unDone.filter( (userInfo) => {
      return !(userInfo.name === username)
    })
  users.done = users.done.filter((userInfo) => {
    return !(userInfo.name === username)
  })
}

function isUserDone(username) {
  return users.done.find( (user) => user.id == username.id );
}

function toggleUser(isDone, userInfo) {
  if(isDone) {
    users.done = users.done.filter( (user) => {
      return user.id !== userInfo.id
    })
    users.unDone.push(userInfo);
  } else {
    users.unDone = users.unDone.filter( (user) => {
      return user.id !== userInfo.id
    })
    users.done.push(userInfo);
  }
}

http.listen(3001, function(){
  console.log('listening on *:3001');
});