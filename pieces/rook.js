import { Piece } from "../pieces.js"
import { dict } from "../vars.js"

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

    valid_moves(){
        let valid_moves = []
        let pos = dict[this.piece_position]

        if(this.piece_color == "white"){
            // UP
            let i = pos[0]
            let j = pos[1]

            while(i-1 >= 0){
                let target_pos = this.board.arr[i-1][j]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i-1,j])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i-1,j])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i--
            }

            // DOWN
            i = pos[0]
            j = pos[1]

            while(i+1 <= 7){
                let target_pos = this.board.arr[i+1][j]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i+1,j])
                    
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i+1,j])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i++
            }

            // LEFT
            i = pos[0]
            j = pos[1]

            while(j-1 >= 0){
                let target_pos = this.board.arr[i][j-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i,j-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i,j-1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j--
            }

            // RIGHT
            i = pos[0]
            j = pos[1]

            while(j+1 <= 7){
                let target_pos = this.board.arr[i][j+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i,j+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "black"){
                    valid_moves.push([i,j+1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j++
            }
        }
        else{
            // UP
            let i = pos[0]
            let j = pos[1]

            while(i-1 >= 0){
                let target_pos = this.board.arr[i-1][j]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i-1,j])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([i-1,j])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i--
            }

            // DOWN
            i = pos[0]
            j = pos[1]

            while(i+1 <= 7){
                let target_pos = this.board.arr[i+1][j]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i+1,j])
                    
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([i+1,j])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                i++
            }

            // LEFT
            i = pos[0]
            j = pos[1]

            while(j-1 >= 0){
                let target_pos = this.board.arr[i][j-1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i,j-1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([i,j-1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j--
            }

            // RIGHT
            i = pos[0]
            j = pos[1]

            while(j+1 <= 7){
                let target_pos = this.board.arr[i][j+1]
                // Condition -> at target_pos there must be not a white piece
                // first check whether there is a piece at the board or not
                if(target_pos.piece == null){
                    valid_moves.push([i,j+1])
                }
                if(target_pos.piece != null && target_pos.piece.piece_color == "white"){
                    valid_moves.push([i,j+1])
                }
                // break if the position is not empty
                if(target_pos.piece != null) break
                j++
            }
        }
        return valid_moves
    }
}

