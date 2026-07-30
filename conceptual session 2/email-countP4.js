function analyzeEmailDomains(text) {
  let words = text.split(" ");
  //   console.log(words);

  let emailCount = 0;
  let longestDomain = "";

  for (let word of words) {
    if (word.includes("@")) {
      emailCount++;

      const parts = word.split("@");
      console.log(parts);
      const domain = parts[1];
      if (domain.length > longestDomain.length) {
        longestDomain = domain;
      }
    }
  }
  console.log(emailCount, longestDomain, "count and domain");
}
const t = "Contact support@gmail.com admin@yahoo.com info@programming.com";
const result = analyzeEmailDomains(t);
