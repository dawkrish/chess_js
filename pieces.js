import { Position } from "./position.js"
import { dict } from "./vars.js"
export class Piece {
    constructor(board,piece_color, piece_position){
        this.board=board
        this.piece_color=piece_color
        this.piece_position = piece_position
    }
    move(to){
       let from_p = dict[this.piece_position]
       let to_p = dict[to]

       this.board[from_p[0]][from_p[1]].piece = null
       this.board[to_p[0]][to_p[1]].piece = this
    }
}


