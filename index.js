const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3001"}));
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: "http://localhost:3001" });

io.on("connection", (socket) => {
  console.log("Server Connected");
});

httpServer.listen(5000);