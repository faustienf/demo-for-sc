import { ChangeEvent } from 'react';
import { Product, TableProductRow } from '../entities/product';
import { productsSlice } from './model.ts';
import { useAppDispatch } from './store';

type Props = {
  product: Product;
};

export const TableProduct = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const value = el.type === 'number' ? el.valueAsNumber : el.value;

    dispatch(
      productsSlice.actions.update({
        ...product,
        [el.name]: value,
      }),
    );
  };

  return <TableProductRow product={product} onChange={handleChange} />;
};
