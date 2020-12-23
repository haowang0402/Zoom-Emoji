// import dependencies and setup

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile("index.html")
})

io.on("connection", (socket)=> {
    console.log("an user has been connected")
    socket.on("disconnect", ()=>{
        console.log("an user has been disconnected")
    })
    socket.on("chat message", (msg)=>{
        console.log(msg)
    })
})



server.listen(3000)