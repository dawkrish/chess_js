export let dict = {
    
}
for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let coordinate = `${String.fromCharCode(65+j)}${8-i}`
            dict[coordinate] = [i,j]
        }
}
