const caesarCipher = function caesarCipher(string, key) {
  const alpahbets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lowerCaseString = string.toLowerCase();
  let newString = '';
  for (let i = 0; i < lowerCaseString.length; i += 1) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alpahbets.indexOf(currentLetter);
    let newIndex = currentIndex + key;
    newString += alpahbets[newIndex];
  }
  return newString;
};

export { caesarCipher };
