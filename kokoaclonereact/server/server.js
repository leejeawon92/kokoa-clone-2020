const express = require('express');
const path = require('path');
const cors = require('cors');
const SocketIO = require('socket.io');

const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer, {
    cors: { origin: '*'}
});

app.use(cors());

app.use(express.static( path.join(path.resolve(), 'build')))
console.log(path.resolve());

app.get('*',(request, response) =>{
    response.sendFile( path.join(path.resolve(), 'build/index.html'))
})

wsServer.on('connection', (socket) =>{
    socket.on('메시지 보내기', (msg)=> {
        console.log(msg);
    })
})



const handleListen = () => console.log("접속성공");
httpServer.listen(5000, handleListen);