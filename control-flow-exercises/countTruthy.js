let array = [0, undefined, null, "", false, NaN, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let element of array) {
    if (element) count++;
  }
  return count;
}
