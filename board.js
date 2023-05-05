// import { Piece } from "./pieces.js"
import { Position } from "./position.js";
import { Pawn } from "./pieces/pawn.js";
import { Knight } from "./pieces/knight.js";
import { Bishop } from "./pieces/bishop.js";
import { Queen } from "./pieces/queen.js";
import { King } from "./pieces/king.js";
import { Rook } from "./pieces/rook.js";
import { board } from "./index.js";

export class Board {
  constructor() {
    this.arr = [];
    this.chance = "white";
    this.create_board();
  }

  create_board() {
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        let color = "";
        if ((i + j) % 2 == 0) {
          color = "white";
        } else {
          color = "black";
        }
        let coordinates = `${String.fromCharCode(65 + j)}${8 - i}`;

        row.push(new Position(color, coordinates));
      }
      this.arr.push(row);
    }
    // Putting 16 Black pieces on the board
    this.arr[0][0].piece = new Rook(this, "black", this.arr[0][0].coordinates);
    this.arr[0][1].piece = new Knight(
      this,
      "black",
      this.arr[0][1].coordinates
    );
    this.arr[0][2].piece = new Bishop(
      this,
      "black",
      this.arr[0][2].coordinates
    );
    this.arr[0][3].piece = new Queen(this, "black", this.arr[0][3].coordinates);
    this.arr[0][4].piece = new King(this, "black", this.arr[0][4].coordinates);
    this.arr[0][5].piece = new Bishop(
      this,
      "black",
      this.arr[0][5].coordinates
    );
    this.arr[0][6].piece = new Knight(
      this,
      "black",
      this.arr[0][6].coordinates
    );
    this.arr[0][7].piece = new Rook(this, "black", this.arr[0][7].coordinates);
    this.arr[1][0].piece = new Pawn(this, "black", this.arr[1][0].coordinates);
    this.arr[1][1].piece = new Pawn(this, "black", this.arr[1][1].coordinates);
    this.arr[1][2].piece = new Pawn(this, "black", this.arr[1][2].coordinates);
    this.arr[1][3].piece = new Pawn(this, "black", this.arr[1][3].coordinates);
    this.arr[1][4].piece = new Pawn(this, "black", this.arr[1][4].coordinates);
    this.arr[1][5].piece = new Pawn(this, "black", this.arr[1][5].coordinates);
    this.arr[1][6].piece = new Pawn(this, "black", this.arr[1][6].coordinates);
    this.arr[1][7].piece = new Pawn(this, "black", this.arr[1][7].coordinates);

    //TEST
    // this.arr[5][1].piece = new Pawn(this,"black",this.arr[5][1].coordinates)

    // Putting 16 White pieces on the board
    this.arr[6][0].piece = new Pawn(this, "white", this.arr[6][0].coordinates);
    this.arr[6][1].piece = new Pawn(this, "white", this.arr[6][1].coordinates);
    this.arr[6][2].piece = new Pawn(this, "white", this.arr[6][2].coordinates);
    this.arr[6][3].piece = new Pawn(this, "white", this.arr[6][3].coordinates);
    this.arr[6][4].piece = new Pawn(this, "white", this.arr[6][4].coordinates);
    this.arr[6][5].piece = new Pawn(this, "white", this.arr[6][5].coordinates);
    this.arr[6][6].piece = new Pawn(this, "white", this.arr[6][6].coordinates);
    this.arr[6][7].piece = new Pawn(this, "white", this.arr[6][7].coordinates);
    this.arr[7][0].piece = new Rook(this, "white", this.arr[7][0].coordinates);
    this.arr[7][1].piece = new Knight(
      this,
      "white",
      this.arr[7][1].coordinates
    );
    this.arr[7][2].piece = new Bishop(
      this,
      "white",
      this.arr[7][2].coordinates
    );
    this.arr[7][3].piece = new Queen(this, "white", this.arr[7][3].coordinates);
    this.arr[7][4].piece = new King(this, "white", this.arr[7][4].coordinates);
    this.arr[7][5].piece = new Bishop(
      this,
      "white",
      this.arr[7][5].coordinates
    );
    this.arr[7][6].piece = new Knight(
      this,
      "white",
      this.arr[7][6].coordinates
    );
    this.arr[7][7].piece = new Rook(this, "white", this.arr[7][7].coordinates);
  }

  render() {
    let boardHtml = document.createElement("div");

    for (let i = 0; i < 8; i++) {
      let row = document.createElement("div");
      for (let j = 0; j < 8; j++) {
        let square = document.createElement("button");

        if (this.arr[i][j].piece == null) {
          square.innerHTML = "";
        } else {
          let img = document.createElement("img");
          img.setAttribute("src", this.arr[i][j].piece.img);
          img.classList.add("img_cls");
          square.appendChild(img);
        }

        square.classList.add("square");
        square.setAttribute("data-key", `${i}${j}`);
        square.setAttribute("clicked", "false");
        square.setAttribute("highlighted", "false");
        square.addEventListener("click", () => {
          foo(square);
        });
        if ((i + j) % 2 == 0) {
          square.classList.add("white_square");
        } else {
          square.classList.add("black_square");
        }
        row.appendChild(square);
        row.classList.add("board_row");
      }
      boardHtml.appendChild(row);
    }

    boardHtml.setAttribute("id", "board");
    return boardHtml;
  }
}

function foo(a) {
  let coordinates = a.dataset.key;

  let h = document.getElementsByClassName("square");
  let squares = convertToBoard(h);

  let game_square_clicked = board.arr[coordinates[0]][coordinates[1]];
  let ui_square_clicked = squares[coordinates[0]][coordinates[1]];

  if (isAnyOtherClicked(squares) != false) {
    // now I cannot click on a piece which is not highlighted and of opposite color
    if (ui_square_clicked.getAttribute("highlighted") == "false") {
      if (game_square_clicked.piece != null) {
        if (game_square_clicked.piece.piece_color != board.chance) {
          return;
        }
      }
    }
  } else {
    if (game_square_clicked.piece != null) {
      if (game_square_clicked.piece.piece_color != board.chance) {
        return;
      }
    }
  }

  if (ui_square_clicked.getAttribute("clicked") == "true") {
    let clicked_piece = isAnyOtherClicked(squares);
    // it means that a piece is already clicked on the board
    if (clicked_piece != false) {
      // now we will remove it from the clicked zone
      let clicked_piece_coord = clicked_piece.dataset.key;
      squares[clicked_piece_coord[0]][clicked_piece_coord[1]].setAttribute(
        "clicked",
        "false"
      );
      // remove the highlights of it !
      // fetch valid moves of the already clicked piece and then remove highlights
      // console.log(board.arr[clicked_piece_coord[0]][clicked_piece_coord[1]].piece)
      let valid_moves =
        board.arr[clicked_piece_coord[0]][
          clicked_piece_coord[1]
        ].piece.valid_moves();
      for (let i = 0; i < valid_moves.length; i++) {
        // now we will remove the highlight of it
        let children = squares[valid_moves[i][0]][valid_moves[i][1]].childNodes;
        let child = null;
        children.forEach((element) => {
          if (element.classList.contains("center")) {
            child = element;
          }
        });

        // remove the highlighted child
        squares[valid_moves[i][0]][valid_moves[i][1]].removeChild(child);
        // remove the attribute of highlighted to false !
        squares[valid_moves[i][0]][valid_moves[i][1]].setAttribute(
          "highlighted",
          "false"
        );
      }
    }
    return;
  }
  if (
    ui_square_clicked.getAttribute("clicked") == "false" &&
    game_square_clicked.piece != null &&
    ui_square_clicked.getAttribute("highlighted") == "false"
  ) {
    // before performing any actions we must check that whether another piece on th ui_board is clicked or not
    // if it is not clicked then we can go further
    // if it is clicked then we must remove all the highlighted piece and remove it from clicked zone

    let clicked_piece = isAnyOtherClicked(squares);
    // it means that a piece is already clicked on the board
    if (clicked_piece != false) {
      // now we will remove it from the clicked zone
      let clicked_piece_coord = clicked_piece.dataset.key;
      squares[clicked_piece_coord[0]][clicked_piece_coord[1]].setAttribute(
        "clicked",
        "false"
      );
      // remove the highlights of it !
      // fetch valid moves of the already clicked piece and then remove highlights
      // console.log(board.arr[clicked_piece_coord[0]][clicked_piece_coord[1]].piece)
      let valid_moves =
        board.arr[clicked_piece_coord[0]][
          clicked_piece_coord[1]
        ].piece.valid_moves();
      for (let i = 0; i < valid_moves.length; i++) {
        // now we will remove the highlight of it
        let children = squares[valid_moves[i][0]][valid_moves[i][1]].childNodes;
        let child = null;
        children.forEach((element) => {
          if (element.classList.contains("center")) {
            child = element;
          }
        });

        // remove the highlighted child
        squares[valid_moves[i][0]][valid_moves[i][1]].removeChild(child);
        // remove the attribute of highlighted to false !
        squares[valid_moves[i][0]][valid_moves[i][1]].setAttribute(
          "highlighted",
          "false"
        );
      }
    }

    // Right now none of the UI board piece is clicked !
    // Now following the original process !
    ui_square_clicked.setAttribute("clicked", "true"); // set the ui_board's tile to clicked=true
    // board.piece_clicked = game_square_clicked.piece
    // now we will get all the valid moves for that piece and highlight them !
    let valid_moves = game_square_clicked.piece.valid_moves();

    for (let i = 0; i < valid_moves.length; i++) {
      let child = document.createElement("div");
      let subschild = document.createElement("div");

      child.classList.add("center");
      subschild.classList.add("transparent");

      child.appendChild(subschild);
      squares[valid_moves[i][0]][valid_moves[i][1]].appendChild(child);
      squares[valid_moves[i][0]][valid_moves[i][1]].setAttribute(
        "highlighted",
        "true"
      );
    }
  }
  if (ui_square_clicked.getAttribute("highlighted") == "true") {
    // we are clicking one of the possible valid moves
    // now we need to perform the move operation
    //first find the piece which "clicked property is set to true !"
    let clicked_piece = isAnyOtherClicked(squares);
    let clicked_piece_coord = clicked_piece.dataset.key;
    board.arr[clicked_piece_coord[0]][clicked_piece_coord[1]].piece.move(
      `${coordinates[0]}${coordinates[1]}`
    );
    let black_king;
    let white_king;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board.arr[i][j].piece != null) {
          if (
            board.arr[i][j].piece.piece_color == "black" &&
            board.arr[i][j].piece.constructor.name == "King"
          )
            black_king = board.arr[i][j].piece;
          if (
            board.arr[i][j].piece.piece_color == "white" &&
            board.arr[i][j].piece.constructor.name == "King"
          )
            white_king = board.arr[i][j].piece;
        }
      }
    }

    if (board.chance == "white") {
      // check if BLACK KING IS CHECKMATE
      if (black_king.is_checkmate()) {
        console.log("white wins!");
      }
      else if (black_king.is_stalemate()) {
        console.log("nobody wins!");
      }
      board.chance = "black";
    } else {
      if (white_king.is_checkmate()) {
        console.log("black wins!");
      }
      else if (white_king.is_stalemate()) {
        console.log("nobody wins!");
      }
      board.chance = "white";
    }
    root.innerHTML = "";
    root.appendChild(board.render());
  }

  if (ui_square_clicked.getAttribute("highlighted") == "false") {
    // Do nothing !
  }
}

function isAnyOtherClicked(squares) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (squares[i][j].getAttribute("clicked") == "true") {
        return squares[i][j];
      }
    }
  }
  return false;
}

function convertToBoard(arr) {
  let i = 0;
  let j = 0;
  let rows = [];
  while (i < 64) {
    let r = [];
    while (j < 8) {
      r.push(arr[i]);
      i++;
      j++;
    }
    j = 0;
    rows.push(r);
  }
  return rows;
}

function highlightedFoo(arr) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i][j].getAttribute("highlighted") == "true") {
        return true;
      }
    }
  }
  return false;
}
