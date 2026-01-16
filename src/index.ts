import {WebSocketServer} from 'ws'
const ws = new WebSocketServer({port:8080});

let userCount = 0;

// new connection 
ws.on('connection',(socket)=>{
  userCount++;
  socket.send(`total connections ${userCount}`);
  socket.send("client connected");
  socket.on("message",(event)=>{
    socket.send("hello Dear",)
  })
})



// how do you recive and send a message to server 














