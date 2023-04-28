import { Piece } from "../pieces.js";

export class Bishop extends Piece{
    constructor(board,piece_color,piece_position){
        super(board,piece_color,piece_position)
        if(piece_color == "black"){
            this.img = 'images/bb.png'
           }
           else{
            this.img = 'images/wb.png'
           }
    }
}