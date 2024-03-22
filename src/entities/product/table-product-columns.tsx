import { memo } from 'react';
import { Product } from './types';

export const columns: Array<Exclude<keyof Product, 'id'>> = [
  'name',
  'calories',
  'carbs',
  'fat',
  'protein',
];

export const TableProductColumns = memo(() => {
  return (
    <tr>
      {columns.map((column) => (
        <th key={column} className="text-left px-2 capitalize font-medium">
          {column}
        </th>
      ))}
    </tr>
  );
});
