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
export { capitalize, reverseString };
