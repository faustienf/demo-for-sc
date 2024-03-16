export const HeavyComponent = ({ duration }: { duration: number }) => {
  const now = Date.now();
  while (Date.now() - now < duration) {
    // ¯\_(ツ)_/¯
  }

  return null;
};
