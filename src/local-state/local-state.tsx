import { useCallback, useState } from 'react';
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
import { TableProduct } from './table-product.tsx';
import { useHeavyCalculation } from './use-heavy-calculation.ts';

export const LocalState = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = useCallback(() => {
    setProducts((state) => [generateProduct(), ...state]);
  }, []);

  const handleChangeProduct = useCallback((nextProduct: Product) => {
    setProducts((state) =>
      state.map((currentProduct) =>
        currentProduct.id === nextProduct.id ? nextProduct : currentProduct,
      ),
    );
  }, []);

  useHeavyCalculation(products.length);

  return (
    <Page>
      <Table>
        <TableCaption>
          <Button onClick={handleAddProduct}>Add product 🍗</Button>
          <span>useState</span>
        </TableCaption>
        <thead>
          <TableProductColumns />
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableProduct
              key={index}
              product={product}
              onChange={handleChangeProduct}
            />
          ))}
          {products.length < 1 && <TableProductPlaceholders rowsCount={1} />}
        </tbody>
      </Table>
    </Page>
  );
};
