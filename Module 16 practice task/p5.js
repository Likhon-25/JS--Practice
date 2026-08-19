const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const marge = [...arr1, ...arr2];
  return marge;
};

console.log(mergeInventory([1, 2], [3, 4]));

const highestScore = (number) => {
    if(!Array.isArray(number)){
        return 'Invalid'
    }
  const findMaxNum = Math.max(...number);
  return findMaxNum;
};

console.log(highestScore([3, 7, 2, "9", 4]));
