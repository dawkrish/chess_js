import { Board } from "./board.js"
import {dict} from "./vars.js"
import { onSquareClick } from "./ui.js"

export const root = document.getElementById('root')

export const board = new Board()


root.appendChild(board.render())


let grid = document.getElementsByClassName('square');
export let squares = convertToBoard(grid)

function convertToBoard(arr){
    let i =0
    let j = 0
    let rows = []
    while(i < 64){
        let r = []
        while(j < 8){
            r.push(arr[i])
            i++;
            j++;
        }
        j = 0
        rows.push(r)
    }
    return rows
}


