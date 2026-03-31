console.log("Trip Plan");

//------------Variables-----------------
const driverName = "Nathan";
const distanceMiles = 350;
const mpg = 26;
const gasPrice = 3.85;
const fuelCapacity = 15;
const isRoundTrip = true;

let totalDistance;

//-------------Derived/Calculated Variables----------------
if (isRoundTrip) {
  totalDistance = distanceMiles * 2;
} else {
  totalDistance = distanceMiles;
}

console.log("Total Distance:", totalDistance);

//-------------Functions----------------
function calculateGallonsNeeded(totalDistance, mpg) {
  return totalDistance / mpg;
}

function calculateFuelCost(gallons, gasPrice) {
  return gallons * gasPrice;
}

//-------------Main Program----------------
const gallonsNeeded = calculateGallonsNeeded(totalDistance, mpg);
const totalCost = calculateFuelCost(gallonsNeeded, gasPrice);

const milesPerTank = fuelCapacity * mpg;

let milesTraveled = 0;
let stopNumber = 0;
let runningCost = 0;

while (milesTraveled < totalDistance) {
  stopNumber++;
  milesTraveled += milesPerTank;

  runningCost += calculateFuelCost(fuelCapacity, gasPrice);
  console.log(`Stop #${stopNumber}`);
  console.log(`Miles traveled: ${Math.min(milesTraveled, totalDistance)}`);
  console.log(`Spent so far: $${runningCost.toFixed(2)}`);
}

//-------------Final Summary----------------
console.log("=== Summary ===");
console.log(`Driver: ${driverName}`);
console.log(`Total Distance: ${totalDistance}`);
console.log(`Gallons Needed: ${gallonsNeeded.toFixed(2)}`);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);
