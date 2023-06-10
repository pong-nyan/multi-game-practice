import { Injectable } from '@nestjs/common';
import { Ball } from './objects/game.objects';

@Injectable()
export class GameService {
  balls = [];
  handleGame() {
    console.log('GameService.handleGame()');
  }

  addBall() {
    this.balls.push(new Ball());
  }

  removeBall() {
    // TODO: Remove My Ball
    this.balls.pop();
  }
}
