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
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private readonly gameService: GameService;


  @SubscribeMessage('game') {
	  this.gameService.handleGame();
  }

  async handleConnection() {
    this.gameService.balls.append({new Date()}); //사용자 증가
    this.server.emit('balls', this.balls);
    console.log(this.balls);
    console.log("Connection", this.balls);
  }

  async handleDisconnect() {
	this.gameService.balls.splice(this.balls.indexOf(socket_id), 1);
	this.server.emit('balls', this.balls);
    console.log("Disconnection", this.balls);
  }
}
