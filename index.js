// Code your solution in this file!
// 1. Return the first two drivers in an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. Return the last two drivers in an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Array containing the first two and last two driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Higher-order function to create a fare multiplier
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // 5. Create a fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // 6. Create a fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // 7. Select different drivers based on the provided function
  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };
  