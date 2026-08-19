const generateReceipt = (customerName, items, total) => {
  if (!Array.isArray(items) || items.length == 0) {
    return "Invalid";
  }
  return `
    Recept for ${customerName},
    Items: ${items},
    Total : ${total}`;
};

console.log(generateReceipt("Likhon", ["Rice", "Milk", "Eggs"], 500));
console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
