/**
 * Reverses the given date format.
 * @param {string} date - Date in string format like YYYY-MM-DD or DD-MM-YYYY
 *
 * @example
 * const reversedDate = reverseDateFormat("2024-12-31");
 * console.log(reversedDate);
 */
export const reverseDateFormat = (date: string) => {
  return date.split("-").reverse().join("-");
};
