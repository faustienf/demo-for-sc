import { ChangeEvent, memo } from 'react';
import { Product } from './types';
import { columns } from './table-product-columns';

type Props = {
  product: Product;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TableProductRow = memo(({ product, onChange }: Props) => {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column} className="text-base p-2">
          <input
            type={typeof product[column] === 'number' ? 'number' : 'text'}
            name={column}
            placeholder="Enter your value"
            className="block w-full text-sm font-normal py-1 outline-0 border-b-2 border-transparent hover:border-slate-200 focus:border-indigo-500"
            autoComplete="off"
            value={product[column]}
            onChange={onChange}
          />
        </td>
      ))}
    </tr>
  );
});
