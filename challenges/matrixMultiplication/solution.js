function matrixMultiplication(matrix1, matrix2) {
    let n = matrix1.length;
    let nSquared = n * n;
    for (let i=0; i<n; i++) {
        let ithVal = 0;
        let jthVal = 0;
        for (let j=0; j<nSquared; j++) {
            j = j > n ? j - n : j;
            console.log(j);

            // console.log(i, j)
            // ithVal += matrix1[i][j] * matrix2[j][i];
            // console.log(matrix1[j][i], matrix2[i][j]);
        }
        console.log(ithVal);

    }
}

console.log(matrixMultiplication( [ [1,2], [3,5] ], [ [4,2], [1,3] ] )) //=> [ [6,8], [17,21] ]