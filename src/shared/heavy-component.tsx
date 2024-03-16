export const HeavyComponent = ({ duration }: { duration: number }) => {
  const start = Date.now();
  let diff = 0;
  while (diff < duration) {
    diff = Date.now() - start;
  }

  console.log('render', diff);

  return null;
};
