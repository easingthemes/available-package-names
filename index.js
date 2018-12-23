const allNpmNames = require('all-the-package-names');
const getAllWords = require('./getAllWords');

const getAvailableNames = (wordLength) => {
  const allWords = getAllWords(wordLength);
  const available = [];

  let i = 0;
  const iMax = allWords.length;
  for (; i < iMax; i++) {
    const word = allWords[i];
    if (allNpmNames.indexOf(word) < 0 && allNpmNames.indexOf(`@${word}/`) < 0) {
      available.push(word);
    }
  }

  return available;
};

module.exports = getAvailableNames;
