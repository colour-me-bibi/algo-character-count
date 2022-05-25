/**
 * This function returns an array of characters in a word and their counts.
 *
 * @param {String} word The word to return counts of
 * @return {Object} An object with the counts of the word
 */
const charCount = (word) => {
  const validChars = new Set(
    Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
  );
  const chars = Array.from(word)
    .filter((char) => validChars.has(char))
    .map((char) => char.toLowerCase());

  const counts = {};
  for (const char of chars) {
    counts[char] = counts[char] || 0;
    counts[char]++;
  }

  return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .map((char) => [char, counts[char]]);
};

module.exports = { charCount };
