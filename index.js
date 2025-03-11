// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
} 
console.log(distanceTravelledInFeet(34, 24));

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(34, 24));
console.log(calculatesFarePrice(34, 15));
console.log(calculatesFarePrice(34, 50));