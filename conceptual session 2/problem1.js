function weeklyStepeSummary(stepsArray) {
    if(Array.isArray(stepsArray) ===false ){
        return "Invalid"
    }

  let steps = 0;
  for (let item of stepsArray) {
    if(typeof item !== "number"){
        return "Invalid"
    }
    steps += item;
  }
  //   console.log(steps);

  // {totalSteps: 50200, goalReached: true}

  let goalReached = false;
  if (steps >= 50000) {
    goalReached = true;
  }
  console.log(steps, goalReached);

  const returnObj = {
    totalSteps: steps,
    goalReached: goalReached,
  };
  return returnObj;
}

const arr = [8000, 7500, 9200, 6000, 10000, 5500, 4000];
// const arr = "Likhon";
const result = weeklyStepeSummary(arr);
console.log(result);
