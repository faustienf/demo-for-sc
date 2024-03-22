import { Product, TableProductRow } from '../entities/product';
import { ChangeEvent } from 'react';

type Props = {
  product: Product;
  onChange: (nextProduct: Product) => void;
};

export const TableProduct = ({ product, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const value = el.type === 'number' ? el.valueAsNumber : el.value;

    onChange({
      ...product,
      [el.name]: value,
    });
  };

  return <TableProductRow product={product} onChange={handleChange} />;
};
