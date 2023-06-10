import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  balls = [];

  //OnGatewayConnection를 오버라이딩
  async handleConnection() {
    this.balls.append({'1'}); //사용자 증가
    this.server.emit('balls', this.balls);
    console.log(this.balls);
    console.log("Connection", this.balls);
  }

  //OnGatewayDisconnect를 오버라이딩
  async handleDisconnect(socket_id: Socket) {
	this.balls.splice(this.balls.indexOf(socket_id), 1);
	this.server.emit('balls', this.balls);
    console.log("Disconnection", this.balls);
  }
}
