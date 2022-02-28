showOddNumbers(10);

// function showOddNumbers(limit) {
//     for (let i=0; i <= limit; i++) {
//         if (i % 2 === 0)
//             console.log(i, 'EVEN');
//         else
//             console.log(i, 'ODD');
//     }
// }

function showOddNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
