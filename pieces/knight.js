import { Piece } from "../pieces.js"

export class Knight extends Piece{
    constructor(board,piece_color,piece_position){
       super(board,piece_color,piece_position)
       if(piece_color == "black"){
        this.img = 'images/bn.png'
       }
       else{
        this.img = 'images/wn.png'
       }
    }
}

