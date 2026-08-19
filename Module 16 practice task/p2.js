const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
  if (typeof movie !== "string" || seats < 0 || pricePerSeat < 0) {
    return "Invalid";
  }
  const totalPrice = seats * pricePerSeat;
  const output = `${movie}: ${seats} seat(s), Total ৳${totalPrice}`;
  return output;
};

console.log(bookTicket("Dune"));
