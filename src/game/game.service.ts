import { Injectable } from '@nestjs/common';
import { Ball } from './objects/game.objects';

@Injectable()
export class GameService {
  balls = [];
  moveBall(keyCode: string) {
    //TODO : Move My Ball
    console.log(keyCode);
    switch (keyCode) {
      case 'ArrowUp':
        this.balls[0].y -= 5;
        break;
      case 'ArrowDown':
        this.balls[0].y += 5;
        break;
      case 'ArrowLeft':
        this.balls[0].x -= 5;
        break;
      case 'ArrowRight':
        this.balls[0].x += 5;
        break;
      default:
        break;
    }
  }
  addBall(socketId: string) {
    this.balls.push(new Ball(socketId));
  }

  removeBall() {
    // TODO: Remove My Ball
    this.balls.pop();
  }
}
