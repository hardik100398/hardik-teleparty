import { TelepartyClient, SocketEventHandler } from "teleparty-websocket-lib";

export const client = new TelepartyClient();
export const handler = new SocketEventHandler(client);
