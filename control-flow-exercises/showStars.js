showStars(10);

// Initial try
// function showStars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// Optimized
function showStars(rows) {
  let row = "";
  for (let i = 1; i <= rows; i++) {
    row += "*";
    console.log(row);
  }
}
