import express from "express";

const app = express();
const handleListen = () => console.log("접속성공");

app.get('/', (req, res)=>{
  res.send('express 설치완료!');
});

app.listen(5000, handleListen);