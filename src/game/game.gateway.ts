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
  constructor(private readonly gameService: GameService) { }

  @WebSocketServer()
  server: Server;

  setIntervalId = setInterval(() => {
    this.server.emit('game', this.gameService.balls);
  }, 1000 / 60);

  @SubscribeMessage('game')
  handleGame(@MessageBody() keyEvent: KeyEvent) {
    this.gameService.moveBall(keyEvent.keyCode);
    // this.server.emit('game', this.gameService.balls);
  }

  async handleConnection(client: Socket) {
    this.gameService.addBall(client.id);
    console.log('Connection', this.gameService.balls);
  }

  async handleDisconnect() {
    this.gameService.removeBall();
    console.log('Disconnection', this.gameService.balls);
  }
}
