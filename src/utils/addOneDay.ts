export const addOneDay = (date: string) => {
  if (!date) {
    return undefined;
  }
  const [day, month, year] = date.split("-").map(Number);
  const currentDate = new Date(year, month - 1, day); // -1 because month is zero-based

  currentDate.setUTCDate(currentDate.getUTCDate() + 2);

  const nextDay = currentDate.toISOString().split("T")[0];

  return nextDay;
};
