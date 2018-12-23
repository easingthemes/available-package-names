// Author Gerrit0 https://codereview.stackexchange.com/a/174360/156719
const flatten = arr => arr.reduce((carry, item) => carry.concat(item), []);

const getAllWords = (wordLength) => {
    if (typeof wordLength !== 'number') throw Error('wordLength must be a number');
    if (wordLength < 1) throw Error('wordLength must be greater than zero');

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lengthen = word => alphabet.map(letter => word + letter);
    let addLetters = words => flatten(words.map(lengthen));
    let _getAllWords = (letters, words = alphabet, current = 1) => {
        return letters === current ? words : _getAllWords(letters, addLetters(words), current + 1);
    };

    return _getAllWords(wordLength);
};

module.exports = getAllWords;
