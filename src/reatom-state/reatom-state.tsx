import { useCallback } from 'react';
import { AtomMut, atom } from '@reatom/framework';
import { useCtx, useAtom } from '@reatom/npm-react';
import {
  Product,
  TableProductColumns,
  TableProductPlaceholders,
  generateProduct,
} from '../entities/product';
import { Page } from '../shared/page';
import { Table } from '../shared/table';
import { TableCaption } from '../shared/table-caption';
import { Button } from '../shared/button';
import { TableProductRowWrap } from './table-product-row-wrap';

const productsAtom = atom<AtomMut<Product>[]>([]);

export const ReatomState = () => {
  const ctx = useCtx();
  const [products, setProducts] = useAtom(productsAtom);

  const handleAddProduct = useCallback(() => {
    setProducts((state) => [atom(generateProduct()), ...state]);
  }, [setProducts]);

  return (
    <Page>
      <Table>
        <TableCaption>
          <Button onClick={handleAddProduct}>Add product 🍗</Button>
          <span>Reatom</span>
        </TableCaption>
        <thead>
          <TableProductColumns />
        </thead>
        <tbody>
          {products.map((product) => (
            <TableProductRowWrap key={ctx.get(product).id} product={product} />
          ))}
          {products.length < 1 && <TableProductPlaceholders rowsCount={1} />}
        </tbody>
      </Table>
    </Page>
  );
};
