import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express()

const server= http.createServer(app);
const io= new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
})

export const getReceiverSocketId=(receiverId)=>{
    return users[receiverId];
}

const users ={}
io.on("connection",(socket)=>{

    console.log("a user connected", socket.id);
    const userId =socket.handshake.query.userId
    if (userId){
        users[userId]=socket.id
        console.log("user collection in socket",users)
    }

    // uised to send the events to all connected clients
    io.emit("getOnlineUsers", Object.keys(users))


    // used to listen client side events, emitted buy server side (server and client)
    socket.on("disconnect",()=>{
        console.log("user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    })
})

export {app, io, server}
