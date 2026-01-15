
import WebSocket, {WebSocketServer} from "ws";
const wss = new WebSocketServer({port:8080})

let usercount = 0;

wss.on("connection",function(socket){
   usercount = usercount+1;
   console.log("user connected",usercount);
})



