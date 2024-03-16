export const HeavyComponent = ({ duration }: { duration: number }) => {
  const now = Date.now();
  while (Date.now() - now < duration) {
    // ¯\_(ツ)_/¯
    console.log('¯_(ツ)_/¯', Date.now() - now);
  }

  return null;
};
