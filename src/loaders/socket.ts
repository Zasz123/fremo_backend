import socket, { Server } from "socket.io";

export default (app: Express.Application) => {
  const io: Server = socket(app);

  io.on("connection", (socket) => {
    console.log("qwe");
  });

  return io;
};
