function  chess (arr) {

//matrix filled with false
    const matrix = [
                    [false, false, false], 
                    [false, false, false],
                    [false, false, false]]
    let player = "X";
    let x;
    let y;
    for (move of arr) {
        //first palyer X move - check matrix
        if (!matrix.join(" ").includes(false)) {
            console.log("The game ended! Nobody wins :(");
            for (let el of matrix) {
                console.log(el.join("\t"))
            }
            return;
        }
        
        
        [x, y] = move.split(" ");
        //check if place is occupied
        //console.log(`x=${x}, y=${y}`);
        if (matrix[x][y]==false){ //move action
            matrix[x][y]= player
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
            }
        // check  if row or columns wins
         for (let i=0; i<3; i++){
            if (matrix[i].join("")==(player.repeat(3))) {
                return print(matrix);
            }
            if (matrix[0][i]+matrix[1][i]+matrix[2][i]==(player.repeat(3))) {
                return print(matrix);
            }
        }
        // check if diag1 wins
        if (matrix[0][0]+matrix[1][1]+matrix[2][2]== (player.repeat(3))) {
            return print(matrix);
            }
        //check if diag2 wins
        if (matrix[0][2]+matrix[1][1]+matrix[2][0]== (player.repeat(3))) {
            return print(matrix);
            }
        
        

    //console.log(matrix.join(" ").includes("X") || matrix.join(" ").includes("O"));
//second palyer O move - check matrix, if place occupied and if free place
// check if X or O wins
    //console.log(player)
    //change player for next move
    if (player=="X") {player = "O";continue;}
    if (player =="O") {player = "X";continue;}

    
}
function print(matrix) {
    console.log (`Player ${player} wins!`)
    for (let el of matrix) {
        console.log(el.join("\t"))
    }
}
}
chess(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]

);
