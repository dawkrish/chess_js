import { Piece } from "../pieces.js";
import { dict } from "../vars.js";

export class Pawn extends Piece {
  constructor(board, piece_color, piece_position) {
    super(board, piece_color, piece_position);
    if (piece_color == "black") {
      this.img = "images/bp.png";
    } else {
      this.img = "images/wp.png";
    }
  }

  valid_moves() {
    let valid_moves_arr = [];
    // A pawn can go only front !
    // First code it for white

    if (this.piece_color == "white") {
      let pos = dict[this.piece_position];
      //1st condition -> The front tile is not out of board
      if (pos[0] - 1 >= 0) {
        // Forward movements !

        //1st Condtiion -> The front tile must be empty !
        if (this.board.arr[pos[0] - 1][pos[1]].piece == null) {
          valid_moves_arr.push([pos[0] - 1, pos[1]]);
          //Special condition -> If the pawn is on this tile, it can move 2 steps !
        }
        if (pos[0] == 6 && this.board.arr[4][pos[1]].piece == null) {
          valid_moves_arr.push([4, pos[1]]);
          //Special condition -> If the pawn is on this tile, it can move 2 steps !
        }

        // Diagonal movements !
        //Left Diagonal

        //1st Condition-> The diagonal must be in the board
        if (pos[1] - 1 >= 0) {
          //2nd condition ->  At diagnoal position, there must be an enemey !
          if (this.board.arr[pos[0] - 1][pos[1] - 1].piece != null) {
            if (
              this.board.arr[pos[0] - 1][pos[1] - 1].piece.piece_color ==
              "black"
            ) {
              // Going Left
              let left_diagonal = [pos[0] - 1, pos[1] - 1];
              valid_moves_arr.push(left_diagonal);
            }
          }
        }

        //Right Diagonal
        //1st Condition-> The diagonal must be in the board
        if (pos[1] + 1 <= 7) {
          //2nd condition ->  At diagnoal position, there must be an enemey !
          if (this.board.arr[pos[0] - 1][pos[1] + 1].piece != null) {
            if (
              this.board.arr[pos[0] - 1][pos[1] + 1].piece.piece_color ==
              "black"
            ) {
              // Going right
              let right_diagonal = [pos[0] - 1, pos[1] + 1];
              valid_moves_arr.push(right_diagonal);
            }
          }
        }
      }
    }

    // for BLACK
    if (this.piece_color == "black") {
      let pos = dict[this.piece_position];
      //1st condition -> The front tile is not out of board
      if (pos[0] + 1 >= 0) {
        // Forward movements !

        //1st Condtiion -> The front tile must be empty !
        if (this.board.arr[pos[0] + 1][pos[1]].piece == null) {
          valid_moves_arr.push([pos[0] + 1, pos[1]]);
          //Special condition -> If the pawn is on this tile, it can move 2 steps !
        }
        if (pos[0] == 1 && this.board.arr[3][pos[1]].piece == null) {
          valid_moves_arr.push([3, pos[1]]);
          //Special condition -> If the pawn is on this tile, it can move 2 steps !
        }

        // Diagonal movements !
        //Left Diagonal

        //1st Condition-> The diagonal must be in the board
        if (pos[1] - 1 >= 0) {
          //2nd condition ->  At diagnoal position, there must be an enemey !
          if (this.board.arr[pos[0] + 1][pos[1] - 1].piece != null) {
            if (
              this.board.arr[pos[0] + 1][pos[1] - 1].piece.piece_color ==
              "white"
            ) {
              // Going Left
              let left_diagonal = [pos[0] + 1, pos[1] - 1];
              valid_moves_arr.push(left_diagonal);
            }
          }
        }

        //Right Diagonal
        //1st Condition-> The diagonal must be in the board
        if (pos[1] + 1 <= 7) {
          //2nd condition ->  At diagnoal position, there must be an enemey !
          if (this.board.arr[pos[0] + 1][pos[1] + 1].piece != null) {
            if (
              this.board.arr[pos[0] + 1][pos[1] + 1].piece.piece_color ==
              "white"
            ) {
              // Going right
              let right_diagonal = [pos[0] + 1, pos[1] + 1];
              valid_moves_arr.push(right_diagonal);
            }
          }
        }
      }
    }
    // before returning these valid moves we must check that whether our king is in check or not
    // first select same color king
    let my_king;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board.arr[i][j].piece != null) {
          if (
            this.board.arr[i][j].piece.piece_color == this.piece_color &&
            this.board.arr[i][j].piece.constructor.name == "King"
          ) {
            my_king = this.board.arr[i][j].piece;
          }
        }
      }
    }
    if (my_king.is_in_check() == true) {
      console.log(this.board);
      let new_valid_moves = [];
      valid_moves_arr.forEach((pos) => {
        // I will place the piece on the valid pos, and check if the king is still in check
        let my_pos = dict[this.piece_position]; // get self piece position
        let piece_at_valid_position = this.board.arr[pos[0]][pos[1]].piece; // get the piece at the valid pos , we will need to put it back !
        this.board.arr[my_pos[0]][my_pos[1]].piece.move(pos); // moving self piece to the valid pos
        if (my_king.is_in_check() == false) {
          // check if king is still in check
          new_valid_moves.push(pos); // if no then you can push it as new_valid_moves
        }
        this.board.arr[pos[0]][pos[1]].piece.move(my_pos); // moving the self piece back to my_pos
        this.board.arr[pos[0]][pos[1]].piece = piece_at_valid_position; // placing the piece which was replaced back to its original position !
      });
      console.log(this.board);
      return new_valid_moves;
    }

    return valid_moves_arr;
  }

  invalid_moves() {
    // function to get invalid moves for the opposite king
    let invalid_moves = [];
    let pos = dict[this.piece_position];
    if (this.piece_color == "white") {
      // getting invalid moves for the BLACK king
      //left diagonal
      if (pos[0] - 1 >= 0 && pos[1] - 1 >= 0) {
        invalid_moves.push([pos[0] - 1, pos[1] - 1]);
      }
      //right diagonal
      if (pos[0] - 1 >= 0 && pos[1] + 1 <= 7) {
        invalid_moves.push([pos[0] - 1, pos[1] + 1]);
      }
    } else {
      // getting invalid moves for the WHITW king
      //left diagonal
      if (pos[0] + 1 <= 7 && pos[1] - 1 >= 0) {
        invalid_moves.push([pos[0] + 1, pos[1] - 1]);
      }
      //right diagonal
      if (pos[0] + 1 <= 7 && pos[1] + 1 <= 7) {
        invalid_moves.push([pos[0] + 1, pos[1] + 1]);
      }
    }
    return invalid_moves;
  }
}
