const allNpmNames = require('all-the-package-names');
const getAllWords = require('./getAllWords');

const getAvailableNames = (data) => {
  let allPossibleNames = [];
  if (typeof data === 'number') {
    allPossibleNames = getAllWords(data);
  } else if (Array.isArray(data)) {
    allPossibleNames = data;
  }

  const available = [];

  let i = 0;
  const iMax = allPossibleNames.length;

  for (; i < iMax; i++) {
    const word = allPossibleNames[i];

    if (allNpmNames.indexOf(word) < 0 && !allNpmNames.includes(`@${word}/`)) {
      available.push(word);
    }
  }

  return available;
};

module.exports = getAvailableNames;
