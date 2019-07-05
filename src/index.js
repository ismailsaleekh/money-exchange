// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) {
    return {};
  }

  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  const exchange = {};

  const halfs = Math.floor(currency / 50);
  if (halfs) {
    exchange.H = halfs;
    currency = currency - halfs * 50;
  }

  const quarters = Math.floor(currency / 25);
  if (quarters) {
    exchange.Q = quarters;
    currency = currency - quarters * 25;
  }

  const dimes = Math.floor(currency / 10);
  if (dimes) {
    exchange.D = dimes;
    currency = currency - dimes * 10;
  }

  const nickels = Math.floor(currency / 5);
  if (nickels) {
    exchange.N = nickels;
    currency = currency - nickels * 5;
  }

  if (currency) {
    exchange.P = currency;
  }

  return exchange;
};
