export const generateProduct = () => ({
  id: crypto.randomUUID() as string,
  name: crypto.randomUUID().slice(0, 8),
  calories: Math.round(Math.random() * 100),
  carbs: Math.round(Math.random() * 100),
  fat: Math.round(Math.random() * 100),
  protein: Math.round(Math.random() * 100),
});
