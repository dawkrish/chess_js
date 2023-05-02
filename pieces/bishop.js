import { Piece } from "../pieces.js";
import { dict } from "../vars.js"

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
    valid_moves(){
        let valid_moves = []
        let pos = dict[this.piece_position]

        if(this.piece_color == "white"){
            // UP LEFT DIAGONAL
            let i = pos[0]
            let j = pos[1]

            while(i-1 >= 0 && j - 1 >= 0){
                let target_pos = this.board.arr[i-1][j-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i-1,j-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i-1,j-1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i--
                j--
            }

            // UP RIGHT
            i = pos[0]
            j = pos[1]

            while(i-1 >= 0 && j+1 <= 7){
                let target_pos = this.board.arr[i-1][j+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i-1,j+1])
                    
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i-1,j+1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i--
                j++
            }

            // DOWN LEFT
            i = pos[0]
            j = pos[1]

            while(j-1 >= 0 && i+1 <= 7){
                let target_pos = this.board.arr[i+1][j-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i+1,j-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i+1,j-1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j--
                i++
            }

            // DOWN RIGHT
            i = pos[0]
            j = pos[1]

            while(j+1 <= 7 && i + 1 <= 7){
                let target_pos = this.board.arr[i+1][j+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i+1,j+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i+1,j+1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j++
                i++
            }
        }
        else{
 // UP LEFT DIAGONAL
 let i = pos[0]
 let j = pos[1]

 while(i-1 >= 0 && j - 1 >= 0){
     let target_pos = this.board.arr[i-1][j-1]
     // Condition -> at target_pos there must be not a white piece
     // first check whether there is a piece at the board or not
     if(target_pos.piece == null){
         valid_moves.push([i-1,j-1])
     }
     if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
         valid_moves.push([i-1,j-1])
     }
     // break if the position is not empty
     if(target_pos.piece != null) break
     i--
     j--
 }

 // UP RIGHT
 i = pos[0]
 j = pos[1]

 while(i-1 >= 0 && j+1 <= 7){
     let target_pos = this.board.arr[i-1][j+1]
     // Condition -> at target_pos there must be not a white piece
     // first check whether there is a piece at the board or not
     if(target_pos.piece == null){
         valid_moves.push([i-1,j+1])
         
     }
     if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
         valid_moves.push([i-1,j+1])
     }
     // break if the position is not empty
     if(target_pos.piece != null) break
     i--
     j++
 }

 // DOWN LEFT
 i = pos[0]
 j = pos[1]

 while(j-1 >= 0 && i+1 <= 7){
     let target_pos = this.board.arr[i+1][j-1]
     // Condition -> at target_pos there must be not a white piece
     // first check whether there is a piece at the board or not
     if(target_pos.piece == null){
         valid_moves.push([i+1,j-1])
     }
     if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
         valid_moves.push([i+1,j-1])
     }
     // break if the position is not empty
     if(target_pos.piece != null) break
     j--
     i++
 }

 // DOWN RIGHT
 i = pos[0]
 j = pos[1]

 while(j+1 <= 7 && i + 1 <= 7){
     let target_pos = this.board.arr[i+1][j+1]
     // Condition -> at target_pos there must be not a white piece
     // first check whether there is a piece at the board or not
     if(target_pos.piece == null){
         valid_moves.push([i+1,j+1])
     }
     if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
         valid_moves.push([i+1,j+1])
     }
     // break if the position is not empty
     if(target_pos.piece != null) break
     j++
     i++
 }
        }
        return valid_moves
    }
}