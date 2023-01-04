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

let users = [];

wsServer.on('connection', (socket) =>{
    if(users.length > 3){
        users =[]
    }
    users.push(socket.id)
    console.log(`users: ${users}`);
    socket.on('send-message', (message) => {
        console.log(`message: ${message}`);
        socket.broadcast.emit('chat-message', {
            message: message,
            user: socket.id
        });
    });
})



const handleListen = () => console.log("접속성공");
httpServer.listen(5000, handleListen);