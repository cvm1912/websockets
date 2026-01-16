import {WebSocketServer} from 'ws'
const ws = new WebSocketServer({port:8080});

let userCount = 0;
let allSockets = [];

// new connection 
ws.on('connection',(socket)=>{
  allSockets.push(socket);
  userCount++;
  socket.send(`total connections ${userCount}`);
  socket.send("client connected");
  socket.on("message",(message)=>{
    allSockets.forEach((sock)=>sock.send("Hello, Mr."+ message.toString()))
  })
})



// how do you recive and send a message to server 














