import { useAtom } from '@reatom/npm-react';
import { ProductAtom, TableProductRow } from '../entities/product';
import { ChangeEvent } from 'react';

type Props = {
  product: ProductAtom;
};

export const TableProductRowWrap = ({ product }: Props) => {
  const [productState, setProductState] = useAtom(product);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const value = el.type === 'number' ? el.valueAsNumber : el.value;

    setProductState({
      ...productState,
      [el.name]: value,
    });
  };

  return <TableProductRow product={productState} onChange={handleChange} />;
};
