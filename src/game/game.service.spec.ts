import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { io, Socket } from 'socket.io-client';


describe('GameService', () => {
  let service: GameService;
  let socket: Socket;
  let httpServer: any;
  let

    beforeAll(async () => {
      httpser
    }
  beforeEach(async () => {
      socket = io.connect('http://localhost:4242', {
        reconnectionDelayMax: 10000,
        forceNew: true,
        transports: ['websocket'],
      });

      service = module.get<GameService>(GameService);
    });

  afterAll(() => {
    console.log('afterAll');

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
