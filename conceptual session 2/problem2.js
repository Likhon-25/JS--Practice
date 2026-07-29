function generateReportCard(student) {
    if(typeof student !== 'object' || Array.isArry(student) === true){
        return 'Invalid'
    }

  const total = student.bangla + student.english + student.math;
  // console.log(total);

  const avg = total / 3;
  // console.log(avg);
  let grade;
  if (avg >= 90) {
    grade = "A+";
  } else if (avg >= 80) {
    grade = "A";
  } else if (avg >= 70) {
    grade = "B";
  } else {
    grade = "F";
  }
  // console.log(grade);

  const returnObj = {
    name: student.name,
    total,
    average: avg,
    grade: grade,
  };
  return returnObj;
}
const studentObj = { name: "Ayan", bangla: 78, english: 85, math: 92 };
const result = generateReportCard(studentObj);
console.log(result);
