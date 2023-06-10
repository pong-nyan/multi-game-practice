import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {

	balls = [];
	handleGame() {
		console.log("GameService.handleGame()");
	}
}
