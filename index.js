import { Board } from "./board.js"
import {dict} from "./vars.js"
const root = document.getElementById('root')


const board = new Board()
console.log(board)
console.log(dict)

console.log(board.arr[6][0].piece.valid_moves())
console.log(board.arr[6][1].piece.valid_moves())
console.log(board.arr[6][2].piece.valid_moves())
root.appendChild(board.render())



