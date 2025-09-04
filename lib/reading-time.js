/**
 * Estimate reading time for a block of text.
 * @param {string} text
 * @param {number} [wordsPerMinute=200]
 * @returns {number} minutes
 */
export function readingTime(text, wordsPerMinute = 200) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
