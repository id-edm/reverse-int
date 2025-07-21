module.exports = function reverse(n) {
  const reverseNumbers = parseInt(
    n.toString().split('').reverse().join(''),
    10
  );
  return reverseNumbers;
};
