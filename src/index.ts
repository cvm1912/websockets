
import WebSocket, {WebSocketServer} from "ws";

// it is same like const app = express()
const wss = new WebSocketServer({port:8080})

wss.on("connection",function(socket){
  console.log("user connected")
  setInterval(()=>{
    socket.send("Hello, WebSockets Users !!")
  },10000);
})
