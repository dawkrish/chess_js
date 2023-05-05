import { Position } from "./position.js";
import { dict } from "./vars.js";
export class Piece {
  constructor(board, piece_color, piece_position) {
    this.board = board;
    this.piece_color = piece_color;
    this.piece_position = piece_position;
  }
  move(to) {
    let from_p = dict[this.piece_position];
    this.board.arr[to[0]][to[1]].piece =
      this.board.arr[from_p[0]][from_p[1]].piece;
    this.board.arr[from_p[0]][from_p[1]].piece = null;
    this.board.arr[to[0]][to[1]].piece.piece_position = `${String.fromCharCode(
      65 + Number(to[1])
    )}${8 - Number(to[0])}`;
  }
}
