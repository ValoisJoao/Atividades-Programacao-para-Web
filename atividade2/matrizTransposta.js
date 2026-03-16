function transporMatriz(A) {
    
    console.log("Matriz original:");
    for (let i = 0; i < 3; i++) {
        console.log(A[i][0], A[i][1]);
    }

    console.log("\nMatriz transposta:");
    for (let j = 0; j < 2; j++) {
        console.log(A[0][j], A[1][j], A[2][j]);
    }
}
let matriz = [
    [1,2],
    [3,4],
    [5,6]
];
transporMatriz(matriz);