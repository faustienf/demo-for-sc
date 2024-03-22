import { memo } from 'react';
import { Product } from './types';

const columns: Array<keyof Product> = [
  'name',
  'calories',
  'carbs',
  'fat',
  'protein',
];

export const TableProductPlaceholders = memo(
  ({ rowsCount }: { rowsCount: number }) => {
    return (
      <>
        {Array.from({ length: rowsCount }, (_, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column} className="py-3 px-2">
                <span className="flex w-1/2 h-4 bg-slate-200 rounded-full" />
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  },
);
