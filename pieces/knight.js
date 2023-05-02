import { Piece } from "../pieces.js"
import { dict } from "../vars.js"

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

    valid_moves(){
        let valid_moves = []

        let pos = dict[this.piece_position]
        // First for white
        if(this.piece_color == "white"){
            if(this.board.chance == "black"){
                return []
            }
        
            // left up up square
            if(pos[0]-2 >=0 && pos[1]-1 >= 0){
                let target_pos = this.board.arr[pos[0]-2][pos[1]-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-2,pos[1]-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]-2,pos[1]-1])
                }
            }

            // left left up square
            if(pos[0]-1 >=0 && pos[1]-2 >= 0){
                let target_pos = this.board.arr[pos[0]-1][pos[1]-2]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-1,pos[1]-2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]-1,pos[1]-2])
                }
            }

            // right up up square
            if(pos[0]-2 >=0 && pos[1]+1 <= 7){
                let target_pos = this.board.arr[pos[0]-2][pos[1]+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-2,pos[1]+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]-2,pos[1]+1])
                }
            }

            // right right up square
            if(pos[0]-1 >=0 && pos[1]+2 <= 7){
                let target_pos = this.board.arr[pos[0]-1][pos[1]+2]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-1,pos[1]+2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]-1,pos[1]+2])
                }
            }



            // left down down square
            if(pos[0]+2 <=7 && pos[1]-1 >= 0){
                let target_pos = this.board.arr[pos[0]+2][pos[1]-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+2,pos[1]-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]+2,pos[1]-1])
                }
            }

            // left left down square
            if(pos[0]+1 <=7 && pos[1]-2 >= 0){
                let target_pos = this.board.arr[pos[0]+1][pos[1]-2]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+1,pos[1]-2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]+1,pos[1]-2])
                }
            }

            // right down down square
            if(pos[0]+2 <=7 && pos[1]+1 <= 7){
                let target_pos = this.board.arr[pos[0]+2][pos[1]+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+2,pos[1]+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]+2,pos[1]+1])
                }
            }

            // right right down square
            if(pos[0]+1 <=7 && pos[1]+2 <= 7){
                let target_pos = this.board.arr[pos[0]+1][pos[1]+2]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+1,pos[1]+2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([pos[0]+1,pos[1]+2])
                }
            }


           

        }
       
        else{
            if(this.board.chance == "white"){
                return []
            }
            // left up up square
            if(pos[0]+2 <=7 && pos[1]-1 >= 0){
                let target_pos = this.board.arr[pos[0]+2][pos[1]-1]
                // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+2,pos[1]-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]+2,pos[1]-1])
                }
            }
            // left left up square
            if(pos[0]+1 <=7 && pos[1]-2 >= 0){
                let target_pos = this.board.arr[pos[0]+1][pos[1]-2]
                // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+1,pos[1]-2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]+1,pos[1]-2])
                }
            }

            // right up up square
            if(pos[0]+2 <=7 && pos[1]+1 <= 7){
                let target_pos = this.board.arr[pos[0]+2][pos[1]+1]
                // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+2,pos[1]+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]+2,pos[1]+1])
                }
            }
            // right right up square
            if(pos[0]+1 <=7 && pos[1]+2 <= 7){
                let target_pos = this.board.arr[pos[0]+1][pos[1]+2]
                
                // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]+1,pos[1]+2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]+1,pos[1]+2])
                }
            }

            // left down down 
            if(pos[0]-2 >=0 && pos[1] -1 >= 0){
                let target_pos = this.board.arr[pos[0]-2][pos[1]-1]
                 // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-2,pos[1]-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]-2,pos[1]-1])
                }
            }

            // left left down
            if(pos[0]-1 >=0 && pos[1] -2 >= 0){
                let target_pos = this.board.arr[pos[0]-1][pos[1]-2]
                 // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-1,pos[1]-2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]-1,pos[1]-2])
                }
            }

            // right down down 
            if(pos[0]-2 >=0 && pos[1] + 1 <= 7){
                let target_pos = this.board.arr[pos[0]-2][pos[1]+1]
                 // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-2,pos[1]+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]-2,pos[1]+1])
                }
            }

            // right right down
            if(pos[0]-1 >=0 && pos[1] +2 <= 7){
                let target_pos = this.board.arr[pos[0]-1][pos[1]+2]
                 // Condition -> at target_pos there must be not a black piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([pos[0]-1,pos[1]+2])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([pos[0]-1,pos[1]+2])
                }
            }
        }

        return valid_moves
    }
}

