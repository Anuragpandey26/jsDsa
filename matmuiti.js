function multiplyMatrices(A, B){
  let result = [];
  for (let i = 0; i < A.length; i++){
    result[i] = [];
    for (let j = 0; j < B[0].length; j++){
      let sum = 0;
      for (let k = 0; k < B.length; k++) {
        sum = sum + A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];
console.log(multiplyMatrices(A, B));
