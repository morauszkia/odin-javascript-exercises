const palindromes = function (word) {
  const lowerCasesLettersOnly = word.toLowerCase().replace(/[^a-z]/g, '');

  return (
    lowerCasesLettersOnly.split('').reverse().join('') === lowerCasesLettersOnly
  );
};

// Do not edit below this line
module.exports = palindromes;
