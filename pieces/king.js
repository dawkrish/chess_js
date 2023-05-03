import { Piece } from "../pieces.js";
import { dict } from "../vars.js";

export class King extends Piece {
  constructor(board, piece_color, piece_position) {
    super(board, piece_color, piece_position);
    this.check = false;
    if (piece_color == "black") {
      this.img = "images/bk.png";
    } else {
      this.img = "images/wk.png";
    }
  }
  valid_moves() {
    let valid_moves = [];
    let pos = dict[this.piece_position];

    if (this.piece_color == "white") {
      let i = pos[0];
      let j = pos[1];
      // UP
      if (i - 1 >= 0) {
        if (this.board.arr[i - 1][j].piece == null) {
          valid_moves.push([i - 1, j]);
        }
        if (
          this.board.arr[i - 1][j].piece != null &&
          this.board.arr[i - 1][j].piece.piece_color == "black"
        ) {
          valid_moves.push([i - 1, j]);
        }
      }
      //DOWN
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7) {
        if (this.board.arr[i + 1][j].piece == null) {
          valid_moves.push([i + 1, j]);
        }
        if (
          this.board.arr[i + 1][j].piece != null &&
          this.board.arr[i + 1][j].piece.piece_color == "black"
        ) {
          valid_moves.push([i + 1, j]);
        }
      }

      //LEFT
      i = pos[0];
      j = pos[1];
      if (j - 1 >= 0) {
        if (this.board.arr[i][j - 1].piece == null) {
          valid_moves.push([i, j - 1]);
        }
        if (
          this.board.arr[i][j - 1].piece != null &&
          this.board.arr[i][j - 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i, j - 1]);
        }
      }
      //RIGHT
      i = pos[0];
      j = pos[1];
      if (j + 1 <= 7) {
        if (this.board.arr[i][j + 1].piece == null) {
          valid_moves.push([i, j + 1]);
        }
        if (
          this.board.arr[i][j + 1].piece != null &&
          this.board.arr[i][j + 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i, j + 1]);
        }
      }
      //UP LEFT
      i = pos[0];
      j = pos[1];
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (this.board.arr[i - 1][j - 1].piece == null) {
          valid_moves.push([i - 1, j - 1]);
        }
        if (
          this.board.arr[i - 1][j - 1].piece != null &&
          this.board.arr[i - 1][j - 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i - 1, j - 1]);
        }
      }
      //UP RIGHT
      i = pos[0];
      j = pos[1];
      if (i - 1 >= 0 && j + 1 <= 7) {
        if (this.board.arr[i - 1][j + 1].piece == null) {
          valid_moves.push([i - 1, j + 1]);
        }
        if (
          this.board.arr[i - 1][j + 1].piece != null &&
          this.board.arr[i - 1][j + 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i - 1, j + 1]);
        }
      }
      //DOWN LEFT
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j - 1 >= 0) {
        if (this.board.arr[i + 1][j - 1].piece == null) {
          valid_moves.push([i + 1, j - 1]);
        }
        if (
          this.board.arr[i + 1][j - 1].piece != null &&
          this.board.arr[i + 1][j - 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i + 1, j - 1]);
        }
      }
      //DOWN RIGHT
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j + 1 <= 7) {
        if (this.board.arr[i + 1][j + 1].piece == null) {
          valid_moves.push([i + 1, j + 1]);
        }
        if (
          this.board.arr[i + 1][j + 1].piece != null &&
          this.board.arr[i + 1][j + 1].piece.piece_color == "black"
        ) {
          valid_moves.push([i + 1, j + 1]);
        }
      }

      // NOW WE HAVE ADDED ALL THE POSSIBLE 8 POSITIONS (not if there is same color piece.)
      // NOW WE NEED TO REMOVE ALL THE POSSIBLE POSITIONS WHERE KING WILL BE AT CHECK
      // MEANING REMOVE ALL SUCH POSSITIONS WHERE OPPONENTS PIECES VALID MOVES COLLIDE WITH OUR KINGS VALID MOVES, THESE WILL BE ILLEGAL POSITIONS FOR OUR KING.
      // LET'S FETCH ALL THE VALID MOVES OF OPPONENT .

      let invalid_moves = [];
      // ITERATE IN THE BOARD, FIND THE OPPONENT PIECE
      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          if (this.board.arr[k][l].piece != null) {
            if (this.board.arr[k][l].piece.piece_color == "black") {
              invalid_moves.push(this.board.arr[k][l].piece.invalid_moves());
            }
          }
        }
      }

      // NOW WE HAVE FETCH ALL THE OPPONENT VALID MOVES !
      // LETS CHECK WHETHER ANY OF OUR KINGS VALID MOVES CLASH WITH OPPONENTS VALID MOVES. IF YES THEN REMOVE IT FROM OUR KING
      invalid_moves.forEach((subArr1) => {
        subArr1.forEach((subsubArr1) => {
          valid_moves = valid_moves.filter((subArr2) => {
            return JSON.stringify(subsubArr1) !== JSON.stringify(subArr2);
          });
        });
      });
    } else {
      let i = pos[0];
      let j = pos[1];
      // UPG
      if (i - 1 >= 0) {
        if (this.board.arr[i - 1][j].piece == null) {
          valid_moves.push([i - 1, j]);
        }
        if (
          this.board.arr[i - 1][j].piece != null &&
          this.board.arr[i - 1][j].piece.piece_color == "white"
        ) {
          valid_moves.push([i - 1, j]);
        }
      }
      //DOWN
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7) {
        if (this.board.arr[i + 1][j].piece == null) {
          valid_moves.push([i + 1, j]);
        }
        if (
          this.board.arr[i + 1][j].piece != null &&
          this.board.arr[i + 1][j].piece.piece_color == "white"
        ) {
          valid_moves.push([i + 1, j]);
        }
      }

      //LEFT
      i = pos[0];
      j = pos[1];
      if (j - 1 >= 0) {
        if (this.board.arr[i][j - 1].piece == null) {
          valid_moves.push([i, j - 1]);
        }
        if (
          this.board.arr[i][j - 1].piece != null &&
          this.board.arr[i][j - 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i, j - 1]);
        }
      }
      //RIGHT
      i = pos[0];
      j = pos[1];
      if (j + 1 <= 7) {
        if (this.board.arr[i][j + 1].piece == null) {
          valid_moves.push([i, j + 1]);
        }
        if (
          this.board.arr[i][j + 1].piece != null &&
          this.board.arr[i][j + 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i, j + 1]);
        }
      }
      //UP LEFT
      i = pos[0];
      j = pos[1];
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (this.board.arr[i - 1][j - 1].piece == null) {
          valid_moves.push([i - 1, j - 1]);
        }
        if (
          this.board.arr[i - 1][j - 1].piece != null &&
          this.board.arr[i - 1][j - 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i - 1, j - 1]);
        }
      }
      //UP RIGHT
      i = pos[0];
      j = pos[1];
      if (i - 1 >= 0 && j + 1 <= 7) {
        if (this.board.arr[i - 1][j + 1].piece == null) {
          valid_moves.push([i - 1, j + 1]);
        }
        if (
          this.board.arr[i - 1][j + 1].piece != null &&
          this.board.arr[i - 1][j + 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i - 1, j + 1]);
        }
      }
      //DOWN LEFT
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j - 1 >= 0) {
        if (this.board.arr[i + 1][j - 1].piece == null) {
          valid_moves.push([i + 1, j - 1]);
        }
        if (
          this.board.arr[i + 1][j - 1].piece != null &&
          this.board.arr[i + 1][j - 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i + 1, j - 1]);
        }
      }
      //DOWN RIGHT
      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j + 1 <= 7) {
        if (this.board.arr[i + 1][j + 1].piece == null) {
          valid_moves.push([i + 1, j + 1]);
        }
        if (
          this.board.arr[i + 1][j + 1].piece != null &&
          this.board.arr[i + 1][j + 1].piece.piece_color == "white"
        ) {
          valid_moves.push([i + 1, j + 1]);
        }
      }
      // NOW WE HAVE ADDED ALL THE POSSIBLE 8 POSITIONS (not if there is same color piece.)
      // NOW WE NEED TO REMOVE ALL THE POSSIBLE POSITIONS WHERE KING WILL BE AT CHECK
      // MEANING REMOVE ALL SUCH POSSITIONS WHERE OPPONENTS PIECES VALID MOVES COLLIDE WITH OUR KINGS VALID MOVES, THESE WILL BE ILLEGAL POSITIONS FOR OUR KING.
      // LET'S FETCH ALL THE VALID MOVES OF OPPONENT .
      let opponent_valid_moves = [];
      // ITERATE IN THE BOARD, FIND THE OPPONENT PIECE
      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          if (this.board.arr[k][l].piece != null) {
            if (this.board.arr[k][l].piece.piece_color == "white") {
              opponent_valid_moves.push(
                this.board.arr[k][l].piece.invalid_moves()
              );
            }
          }
        }
      }

      // NOW WE HAVE FETCH ALL THE OPPONENT VALID MOVES !
      // LETS CHECK WHETHER ANY OF OUR KINGS VALID MOVES CLASH WITH OPPONENTS VALID MOVES. IF YES THEN REMOVE IT FROM OUR KING
      opponent_valid_moves.forEach((subArr1) => {
        subArr1.forEach((subsubArr1) => {
          valid_moves = valid_moves.filter((subArr2) => {
            return JSON.stringify(subsubArr1) !== JSON.stringify(subArr2);
          });
        });
      });
      console.log(opponent_valid_moves);
    }
    return valid_moves;
  }
  invalid_moves() {
    // function to get invalid moves for the opposite king
    let invalid_moves = [];
    let pos = dict[this.piece_position];

    let i = pos[0];
    let j = pos[1];
    if (i - 1 >= 0) {
      invalid_moves.push([i - 1, j]);
    }

    i = pos[0];
    j = pos[1];
    if (i + 1 <= 7) {
      invalid_moves.push([i + 1, j]);
    }

    i = pos[0];
    j = pos[1];
    if (j - 1 >= 0) {
        invalid_moves.push([i, j - 1]);
    }


    i = pos[0];
    j = pos[1];
    if (j + 1 <= 7) {
        invalid_moves.push([i, j + 1]);
    }


    i = pos[0];
    j = pos[1];
    if (j + 1 <= 7) {
        invalid_moves.push([i - 1, j - 1]);
    }


      i = pos[0];
      j = pos[1];
      if (i - 1 >= 0 && j + 1 <= 7) {
        invalid_moves.push([i - 1, j + 1]);
      }


      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j - 1 >= 0) {
        invalid_moves.push([i + 1, j - 1]);
      }

      i = pos[0];
      j = pos[1];
      if (i + 1 <= 7 && j + 1 <= 7) {
        invalid_moves.push([i + 1, j + 1]);
      }
    return invalid_moves;
  }
}
