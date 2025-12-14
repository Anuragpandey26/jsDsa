function findErrorNums(nums) {
  const n = nums.length;
  let count = [];

  for (let i = 0; i <= n; i++) {
    count[i] = 0;
  }

  for (let x of nums) {
    count[x]++;
  }

  let duplicate = -1;
  let missing = -1;

  for (let i = 1; i <= n; i++) {
    if (count[i] === 2) duplicate = i;
    if (count[i] === 0) missing = i;
  }

  return [duplicate, missing];
}
const nums=[1,2,2,4]
console.log(findErrorNums(nums))