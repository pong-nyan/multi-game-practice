import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { GameService } from './game.service';
import { KeyEvent } from './objects/game.interface';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('game') 
  handleGame(@MessageBody() keyEvent: KeyEvent) {
    this.gameService.moveBall(keyEvent.keyCode);
  }

  async handleConnection(client: Socket) {
    this.gameService.addBall(client.id);
    this.server.emit('balls', this.gameService.balls);
    console.log('Connection', this.gameService.balls);
  }

  async handleDisconnect() {
    this.gameService.removeBall();
    this.server.emit('balls', this.gameService.balls);
    console.log('Disconnection', this.gameService.balls);
  }
}
