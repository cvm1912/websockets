import {WebSocketServer, WebSocket} from 'ws'
const ws = new WebSocketServer({port:8080});

let userCount = 0;
let allSockets:WebSocket[] = [];

// new connection 
ws.on('connection',(socket)=>{
  allSockets.push(socket);
  userCount++;
  socket.send(`total connections ${userCount}`);
  socket.send("client connected");
  socket.on("message",(message)=>{
    allSockets.forEach((sock)=>sock.send("Hello, Mr."+ message.toString()))
  })

  socket.on("disconnect", () => {
  allSockets = allSockets.filter(x => x !== socket);
  });
})



















