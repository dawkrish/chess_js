import { Piece } from "../pieces.js";
import { dict } from "../vars.js";

export class Bishop extends Piece {
  constructor(board, piece_color, piece_position) {
    super(board, piece_color, piece_position);
    if (piece_color == "black") {
      this.img = "images/bb.png";
    } else {
      this.img = "images/wb.png";
    }
  }
  valid_moves() {
    let valid_moves = [];
    let pos = dict[this.piece_position];

    if (this.piece_color == "white") {
      // UP LEFT DIAGONAL
      let i = pos[0];
      let j = pos[1];

      while (i - 1 >= 0 && j - 1 >= 0) {
        let target_pos = this.board.arr[i - 1][j - 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i - 1, j - 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "black"
        ) {
          valid_moves.push([i - 1, j - 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        i--;
        j--;
      }

      // UP RIGHT
      i = pos[0];
      j = pos[1];

      while (i - 1 >= 0 && j + 1 <= 7) {
        let target_pos = this.board.arr[i - 1][j + 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i - 1, j + 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "black"
        ) {
          valid_moves.push([i - 1, j + 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        i--;
        j++;
      }

      // DOWN LEFT
      i = pos[0];
      j = pos[1];

      while (j - 1 >= 0 && i + 1 <= 7) {
        let target_pos = this.board.arr[i + 1][j - 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i + 1, j - 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "black"
        ) {
          valid_moves.push([i + 1, j - 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        j--;
        i++;
      }

      // DOWN RIGHT
      i = pos[0];
      j = pos[1];

      while (j + 1 <= 7 && i + 1 <= 7) {
        let target_pos = this.board.arr[i + 1][j + 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i + 1, j + 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "black"
        ) {
          valid_moves.push([i + 1, j + 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        j++;
        i++;
      }
    } else {
      // UP LEFT DIAGONAL
      let i = pos[0];
      let j = pos[1];

      while (i - 1 >= 0 && j - 1 >= 0) {
        let target_pos = this.board.arr[i - 1][j - 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i - 1, j - 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "white"
        ) {
          valid_moves.push([i - 1, j - 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        i--;
        j--;
      }

      // UP RIGHT
      i = pos[0];
      j = pos[1];

      while (i - 1 >= 0 && j + 1 <= 7) {
        let target_pos = this.board.arr[i - 1][j + 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i - 1, j + 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "white"
        ) {
          valid_moves.push([i - 1, j + 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        i--;
        j++;
      }

      // DOWN LEFT
      i = pos[0];
      j = pos[1];

      while (j - 1 >= 0 && i + 1 <= 7) {
        let target_pos = this.board.arr[i + 1][j - 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i + 1, j - 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "white"
        ) {
          valid_moves.push([i + 1, j - 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        j--;
        i++;
      }

      // DOWN RIGHT
      i = pos[0];
      j = pos[1];

      while (j + 1 <= 7 && i + 1 <= 7) {
        let target_pos = this.board.arr[i + 1][j + 1];
        // Condition -> at target_pos there must be not a white piece
        // first check whether there is a piece at the board or not
        if (target_pos.piece == null) {
          valid_moves.push([i + 1, j + 1]);
        }
        if (
          target_pos.piece != null &&
          target_pos.piece.piece_color == "white"
        ) {
          valid_moves.push([i + 1, j + 1]);
        }
        // break if the position is not empty
        if (target_pos.piece != null) break;
        j++;
        i++;
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
      valid_moves.forEach((pos) => {
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
    return valid_moves;
  }
  invalid_moves() {
    // function to get invalid moves for the opposite king
    let invalid_moves = [];
    let pos = dict[this.piece_position];
    // UP LEFT DIAGONAL
    let i = pos[0];
    let j = pos[1];

    while (i - 1 >= 0 && j - 1 >= 0) {
      let target_pos = this.board.arr[i - 1][j - 1];
      invalid_moves.push([i - 1, j - 1]);
      // break if the position is not empty
      if (target_pos.piece != null) {
        if (target_pos.piece.piece_color == this.piece_color) {
          break;
        } else {
          if (target_pos.piece.constructor.name != "King") {
            break;
          }
        }
      }
      i--;
      j--;
    }

    // UP RIGHT
    i = pos[0];
    j = pos[1];

    while (i - 1 >= 0 && j + 1 <= 7) {
      let target_pos = this.board.arr[i - 1][j + 1];
      invalid_moves.push([i - 1, j + 1]);
      if (target_pos.piece != null) {
        if (target_pos.piece.piece_color == this.piece_color) {
          break;
        } else {
          if (target_pos.piece.constructor.name != "King") {
            break;
          }
        }
      }
      i--;
      j++;
    }

    // DOWN LEFT
    i = pos[0];
    j = pos[1];

    while (j - 1 >= 0 && i + 1 <= 7) {
      let target_pos = this.board.arr[i + 1][j - 1];
      invalid_moves.push([i + 1, j - 1]);
      if (target_pos.piece != null) {
        if (target_pos.piece.piece_color == this.piece_color) {
          break;
        } else {
          if (target_pos.piece.constructor.name != "King") {
            break;
          }
        }
      }
      j--;
      i++;
    }

    // DOWN RIGHT
    i = pos[0];
    j = pos[1];

    while (j + 1 <= 7 && i + 1 <= 7) {
      let target_pos = this.board.arr[i + 1][j + 1];
      invalid_moves.push([i + 1, j + 1]);
      if (target_pos.piece != null) {
        if (target_pos.piece.piece_color == this.piece_color) {
          break;
        } else {
          if (target_pos.piece.constructor.name != "King") {
            break;
          }
        }
      }
      j++;
      i++;
    }
    return invalid_moves;
  }
}
