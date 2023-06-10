import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer()
  server: Server;

  // @SubscribeMessage('game') {
  //  this.gameService.handleGame();
  // }

  async handleConnection() {
    this.gameService.addBall();
    this.server.emit('balls', this.gameService.balls);
    console.log(this.gameService.balls);
    console.log('Connection', this.gameService.balls);
  }

  async handleDisconnect() {
    this.gameService.removeBall();
    this.server.emit('balls', this.gameService.balls);
    console.log('Disconnection', this.gameService.balls);
  }
}
