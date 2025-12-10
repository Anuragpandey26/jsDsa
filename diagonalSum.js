function DiagonalSum(matrix){
   let LeftSum=0
   let RightSum=0
   const n= matrix.length
   for(let i =0;i<n;i++){
      LeftSum+=matrix[i][i];
      RightSum+=matrix[i][n-i-1];
   }
   return {
       LeftDiagonal:LeftSum,
       RightDiagonal:RightSum
   }
}
const matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [5,7,8,9]
    ]
const result=DiagonalSum(matrix);
console.log("the sum of the  diagonal:",result);