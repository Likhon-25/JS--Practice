function isLeapYear(year) {
  //   if (year % 4 === 0) {              //With if
  //     if((year % 100 !== 0) || year % 400 === 0){
  //     return true;
  //     }
  //   }
  //   return false;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    //With Operator
    return true;
  }
}

const year = 2024;
const result = isLeapYear(year);
console.log(result);
