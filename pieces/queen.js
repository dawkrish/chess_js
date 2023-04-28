import { Piece } from "../pieces.js"

export class Queen extends Piece{
    constructor(board,piece_color,piece_position){
       super(board,piece_color,piece_position)
       if(piece_color == "black"){
        this.img = 'images/bq.png'
       }
       else{
        this.img = 'images/wq.png'
       }
    }
}

