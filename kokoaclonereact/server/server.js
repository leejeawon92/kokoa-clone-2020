const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const handleListen = () => console.log("접속성공");

app.use(cors());

// app.get('/', (req, res)=>{
//   res.send('express 설치완료!!!!');
// });

app.use(express.static( path.join(path.resolve(), 'build')))
console.log(path.resolve());

app.get('*',(request, response) =>{
    response.sendFile( path.join(path.resolve(), 'build/index.html'))
})


app.listen(5000, handleListen);