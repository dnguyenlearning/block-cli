import { Server, ServerOptions } from "socket.io";
import * as http from "http";
import { ISocketResponse, IBlockCliSocket } from "../interface/socket";
import { SocketType } from "../enum";

const SOCKET_PATH_DEFAULT = "block-cli:sockjs-node";

const emitMessage = (socket: Server, response: ISocketResponse) => {
  socket.emit(SOCKET_PATH_DEFAULT, response);
};

class BlockCliSocket implements IBlockCliSocket {
  blockCliSocket: Server;
  constructor(server: http.Server | number, serverOptions?: ServerOptions) {
    const baseServerOptions = {
      path: `/${SOCKET_PATH_DEFAULT}`,
      allowEIO3: true,
      cors: {
        origin: true,
        credentials: true,
      },
    };
    // init socket service
    this.blockCliSocket = new Server(server, {
      ...baseServerOptions,
      ...serverOptions,
    });
  }

  liveReload() {
    emitMessage(this.blockCliSocket, { type: SocketType.LiveReload });
  }
}

let blockCliSocket: IBlockCliSocket;

export const createBlockCliSocket = (
  server: http.Server,
  serverOptions?: ServerOptions
) => {
  if (!blockCliSocket) {
    blockCliSocket = new BlockCliSocket(server, serverOptions);
  }
  return blockCliSocket;
};
