/**
 * Returns the current date in format "yyyy-mm-dd"
 * @param {number} [offsetDays = 0] - Offset in days from the current date.
 *
 * @example
 * const date = currentDate();
 * console.log(date);
 */
export const currentDate = (offsetDays = 0) => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate() + offsetDays).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
