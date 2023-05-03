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
          if (pos[0] == 6) {
            valid_moves_arr.push([4, pos[1]]);
          }
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
          if (pos[0] == 1) {
            valid_moves_arr.push([3, pos[1]]);
          }
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
    return invalid_moves
  }
}
