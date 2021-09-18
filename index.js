const capitalize = function capitalize(string) {
  const stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join('');
};
const reverseString = function reverseString(string) {
  const stringArray = string.split('');
  const reversedArray = [];
  for (let i = stringArray.length; i >= 0; i -= 1) {
    reversedArray.push(stringArray[i]);
  }
  return reversedArray.join('');
};
const calculator = {
  add(x, y) {
    return Number(x) + Number(y);
  },
  subtract(x, y) {
    return Number(x) - Number(y);
  },
};
export { capitalize, reverseString, calculator };
