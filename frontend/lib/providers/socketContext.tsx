import React from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:8080',{transports:['websocket']});   


export const SocketContext = React.createContext(socket);
   