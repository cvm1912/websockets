
import WebSocket, {WebSocketServer} from "ws";
const wss = new WebSocketServer({port:8080})

let usercount = 0;

wss.on("connection",function(socket){
   usercount = usercount+1;
   console.log("user connected",usercount);

   socket.on("message",(event)=>{
        socket.send("thanks for the message git a"+ event.toString());
   })
})



