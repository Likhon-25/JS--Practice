const describeDeclaration = (keyword) => {
  if (keyword == "var") {
    return "Can redeclare, can reassign";
  } else if (keyword == "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword == "const") {
    return "Cannot redeclare, cannot reassign";
  } else {
    return "Invalid";
  }
};

console.log(describeDeclaration("int"));
