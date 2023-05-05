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
  is_in_check() {
    // To check whether your king is in check or not, we will gather all the Opponent's valid moves, if any of them has king as it's position then king is in check
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board.arr[i][j].piece != null) {
          if (this.board.arr[i][j].piece.piece_color != this.piece_color) {
            // we have counter an opponent piece

            let opp_valid_moves = this.board.arr[i][j].piece.invalid_moves();
            let my_king_position = dict[this.piece_position];

            for (let k = 0; k < opp_valid_moves.length; k++) {
              if (
                JSON.stringify(opp_valid_moves[k]) ==
                JSON.stringify(my_king_position)
              ) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  is_checkmate() {
    if (this.is_in_check() == false) {
      // if not it in check then no checkmate
      return false;
    }
    //now if any of the same color as king, piece has a valid move then not checkmate, else check mate
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board.arr[i][j].piece != null) {
          if (this.board.arr[i][j].piece.piece_color == this.piece_color) {
            // my color pieces
            // if none of them have valid any valid moves and the king is in check
            if (this.board.arr[i][j].piece.valid_moves().length > 0) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  is_stalemate() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board.arr[i][j].piece != null) {
          if (this.board.arr[i][j].piece.piece_color == this.piece_color) {
            // my color pieces
            // if none of them have valid any valid moves and the king is in check
            if (this.board.arr[i][j].piece.valid_moves().length > 0) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
