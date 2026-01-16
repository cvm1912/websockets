import {WebSocketServer} from 'ws'
const ws = new WebSocketServer({port:8080});

let userCount = 0;

// new connection 
ws.on('connection',(socket)=>{
  userCount++;
  socket.send(`total connections ${userCount}`);
  socket.send("client connected");
})














