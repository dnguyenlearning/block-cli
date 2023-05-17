import { Server } from "socket.io";
import { SocketType } from "../enum";

export interface IBlockCliSocket {
  blockCliSocket: Server;
  liveReload: () => void;
}

export interface ISocketResponse {
  type: SocketType;
  data?: null;
}
