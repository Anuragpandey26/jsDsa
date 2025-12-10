function SumMat(matrix){
     let sum =0;
    for (let i=0;i<matrix.length;i++){
     for(let j =0 ;j<matrix[i].length;j++){
         sum+=matrix[i][j];
      }
    }
    return sum;
}
const matrix=[
     [1,2,3,4],
     [1,2,3,5],
     [1,2,3,4]
    ];
console.log("the sum of the matrix  is :",SumMat(matrix))