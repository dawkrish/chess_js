// import { Piece } from "./pieces.js"
import { Position } from "./position.js"
import { Pawn } from "./pieces/pawn.js"
import { Knight } from "./pieces/knight.js"
import { Bishop } from "./pieces/bishop.js"
import { Queen } from "./pieces/queen.js"
import { King } from "./pieces/king.js"
import { Rook } from "./pieces/rook.js"

export class Board{
    constructor(){
        this.arr=[]
        this.create_board()
    }

    create_board(){
        for (let i = 0; i < 8; i++) {
            let row = []
            for(let j = 0; j < 8; j++){
                let color = ""
                if((i+j) % 2 == 0){
                    color = "white"
                }else{
                    color="black"
                }
                let coordinates = `${String.fromCharCode(65+j)}${8-i}`

                row.push(new Position(color,coordinates))
            }
            this.arr.push(row)
        }
        // Putting 16 Black pieces on the board
        this.arr[0][0].piece = new Rook(this.arr,"black",this.arr[0][0].coordinates)
        this.arr[0][1].piece = new Knight(this.arr,"black",this.arr[0][1].coordinates)
        this.arr[0][2].piece = new Bishop(this.arr,"black",this.arr[0][2].coordinates)
        this.arr[0][3].piece = new Queen(this.arr,"black",this.arr[0][3].coordinates)
        this.arr[0][4].piece = new King(this.arr,"black",this.arr[0][4].coordinates)
        this.arr[0][5].piece = new Bishop(this.arr,"black",this.arr[0][5].coordinates)
        this.arr[0][6].piece = new Knight(this.arr,"black",this.arr[0][6].coordinates)
        this.arr[0][7].piece = new Rook(this.arr,"black",this.arr[0][7].coordinates)
        this.arr[1][0].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][1].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][2].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][3].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][4].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][5].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][6].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)
        this.arr[1][7].piece = new Pawn(this.arr,"black",this.arr[1][0].coordinates)

        //TEST
        this.arr[5][1].piece = new Pawn(this.arr,"black",this.arr[5][1].coordinates)

        // Putting 16 White pieces on the board 
        this.arr[6][0].piece = new Pawn(this.arr,"white",this.arr[6][0].coordinates)
        this.arr[6][1].piece = new Pawn(this.arr,"white",this.arr[6][1].coordinates)
        this.arr[6][2].piece = new Pawn(this.arr,"white",this.arr[6][2].coordinates)
        this.arr[6][3].piece = new Pawn(this.arr,"white",this.arr[6][3].coordinates)
        this.arr[6][4].piece = new Pawn(this.arr,"white",this.arr[6][4].coordinates)
        this.arr[6][5].piece = new Pawn(this.arr,"white",this.arr[6][5].coordinates)
        this.arr[6][6].piece = new Pawn(this.arr,"white",this.arr[6][6].coordinates)
        this.arr[6][7].piece = new Pawn(this.arr,"white",this.arr[6][7].coordinates)
        this.arr[7][0].piece = new Rook(this.arr,"white",this.arr[7][0].coordinates)
        this.arr[7][1].piece = new Knight(this.arr,"white",this.arr[7][1].coordinates)
        this.arr[7][2].piece = new Bishop(this.arr,"white",this.arr[7][2].coordinates)
        this.arr[7][3].piece = new Queen(this.arr,"white",this.arr[7][3].coordinates)
        this.arr[7][4].piece = new King(this.arr,"white",this.arr[7][4].coordinates)
        this.arr[7][5].piece = new Bishop(this.arr,"white",this.arr[7][5].coordinates)
        this.arr[7][6].piece = new Knight(this.arr,"white",this.arr[7][6].coordinates)
        this.arr[7][7].piece = new Rook(this.arr,"white",this.arr[7][7].coordinates)


    }

    render(){
        let board = document.createElement('div')

        for(let i = 0; i < 8; i++){
            let row = document.createElement('div')
            for(let j = 0; j < 8; j++){
                let square = document.createElement('button')

                if(this.arr[i][j].piece == null){
                    square.innerHTML = ""
                }else{
                    let img = document.createElement('img')
                    img.setAttribute("src",this.arr[i][j].piece.img)
                    img.classList.add('img_cls')
                    square.appendChild(img)
                }
                
                square.classList.add('square')
                if ((i + j) % 2 == 0){
                    square.classList.add('white_square')
                }else{
                    square.classList.add('black_square')
                }
                row.appendChild(square)
                row.classList.add('board_row')
            }
            board.appendChild(row)
        }
        
        board.setAttribute("id","board")
        return board
    }


}