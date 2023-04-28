import { Piece } from "../pieces.js"

export class Rook extends Piece{
    constructor(board,piece_color,piece_position){
       super(board,piece_color,piece_position)
       if(piece_color == "black"){
        this.img = 'images/br.png'
       }
       else{
        this.img = 'images/wr.png'
       }
    }
}

