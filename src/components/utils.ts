export function randomNumber(start: number, end: number) {
  return Math.floor(Math.random() * (end - start) + start);
}

export const computeDeliveryDate = (days: number) => {
  const computedDate = new Date(Date.now());
  computedDate.setDate(computedDate.getDate() + days);
  return computedDate;
};
