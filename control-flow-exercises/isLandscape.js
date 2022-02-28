// No need to write true or false explicitly
// function isLandscape(width, height) {
//     return (width > height) ? true : false;
// }

function isLandscape(width, height) {
  return width > height;
}

let condition = isLandscape(480, 720);
console.log(condition);
