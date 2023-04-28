import { Piece } from "../pieces.js"

export class King extends Piece{
    constructor(board,piece_color,piece_position){
       super(board,piece_color,piece_position)
       if(piece_color == "black"){
        this.img = 'images/bk.png'
       }
       else{
        this.img = 'images/wk.png'
       }
    }
}

