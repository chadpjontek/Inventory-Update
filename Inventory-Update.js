function updateInventory(arr1, arr2) {
  // object arrays to store current and new inventory
  var curInv = {}, newInv = {};
  arr1.forEach(function (element) {
    element.reverse();
    curInv[element[0]] = element[1];
  });
  arr2.forEach(function (element) {
    element.reverse();
    newInv[element[0]] = element[1];
  });
  // update inventory
  var curKeys = Object.keys(curInv), newKeys = Object.keys(newInv);
  if (newKeys !== []) {
    newKeys.forEach(function (val) {
      // add new inventory to current if different
      if (curInv[val] !== newInv[val] && curInv[val]) {
        curInv[val] += newInv[val];
      } else {
        // otherwise just update
        curInv[val] = newInv[val];
      }
    });
  }
  // sort object function
  function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
  }
  // sort inventory and convert to orignal reversed array
  curInv = sortObject(curInv);
  var result = Object.keys(curInv).map((k) => [curInv[k], k]);
  return result;
}
// Examples
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); // returns [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); // returns [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); // returns [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]); // returns [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]