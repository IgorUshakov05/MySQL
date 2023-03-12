const express = require("express"),
    app = express(),
    PORT = 8080;
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const mysql = require("mysql2");

const DataFromUser = require('./router/MiddleWare.js')
const PostData = require('./router/PostData.js')
app.use(DataFromUser);



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/Comander.html")
})

app.post('/post',PostData)

app.use('*', (req,res) => {
    res.send({message: "Hello"})
})

app.listen(PORT, () => {
    console.log(`Server started to PORT: ${PORT}`);
    console.log('http://localhost:8080/')
})