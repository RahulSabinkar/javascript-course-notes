// Speed Limit = 70
// Every 5 speed -> 1 points
// Use Math.floor(1.3)
// More than 12 points -> license suspended

let speed = 130;
checkSpeed(speed);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points < 1) console.log("OK");
  else if (points < 12) console.log("Point: " + points);
  else console.log("License suspended");
}
