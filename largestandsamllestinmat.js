function MinAndMaxInMat(matrix){
    let max =matrix[0][0];
    let min =matrix[0][0];
    for (let i =0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            const current = matrix[i][j];
            if(current>max) max = current;
            if(current<min) min = current;
        }
    }
    return{max,min}
}
const matrix =[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    ];
console.log("the max and min in matrix is :", MinAndMaxInMat(matrix));