module.exports = function reverse (n) {
  const reverseNumbers = parseInt(n.toString().split("").reverse().join(""));
			return reverseNumbers;
}
