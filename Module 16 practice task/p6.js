const extractUserInfo = (userObj) => {
  const {
    user: { name: name, age: age },
    hobbies: [read = "nothing yet", code],
  } = userObj;
  if (!name) {
    return "Invalid";
  }

  return `${name} (${age}) likes ${read}`;
};

// console.log(
//   extractUserInfo({
//     user: {
//       name: "Sadia",
//       age: 22,
//     },
//     hobbies: ["reading", "coding"],
//   }),
// );

console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));

// console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));
