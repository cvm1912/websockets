
import WebSocket, {WebSocketServer} from "ws";
const wss = new WebSocketServer({port:8080})

let usercount = 0;
let allSockets = [];
wss.on("connection",function(socket){
    // when ever client get connect
    allSockets.push(socket);

   usercount = usercount+1;
   console.log("user connected",usercount);

   socket.on("message",(event)=>{
        allSockets.forEach((message)=>{
            if(message != socket){
                message.send(event.toString());
            }
        })
   })
})



