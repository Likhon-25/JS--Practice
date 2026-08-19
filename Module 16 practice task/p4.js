const calculateBMI = (weigth, height) => {
  if (weigth <= 0 || height <= 0) {
    return "Invalid";
  }
  const BMI = weigth / (height * height);
  const result = BMI.toFixed(2);
  return Number(result);
};

console.log(calculateBMI(70, 1.75));
