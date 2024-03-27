export const useHeavyCalculation = (count: number) => {
  const start = Date.now();
  let diff = 0;
  while (diff < count * 10) {
    diff = Date.now() - start;
  }

  return (diff && null) || null;
};
