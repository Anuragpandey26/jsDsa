function MatDiagonal(matrixA){
    let leftlargest=-Infinity
    let leftsmallest =Infinity
    let rightlargest=-Infinity
    let rightsmallest =Infinity
    let n= matrixA.length
     for(let i =0;i < matrixA.length;i++){
    if(matrixA[i][i]>leftlargest) leftlargest = matrixA[i][i]
    if(matrixA[i][n-1-i]>rightlargest) rightlargest= matrixA[i][n-1-i]
    if(matrixA[i][i]<leftsmallest) leftsmallest= matrixA[i][i]
   if(matrixA[i][n-1-i]<rightsmallest) rightsmallest = matrixA[i][n-1-i]
  }
  return [leftlargest,leftsmallest,rightlargest, rightsmallest]
}
const matrixA =[
     [1,2,5],
     [3,4,5],
     [6,7,8]
    ];
console.log(MatDiagonal(matrixA))