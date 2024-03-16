import { AtomMut } from '@reatom/framework';

export type Product = {
  id: string;
  name: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type ProductAtom = AtomMut<Product>;
