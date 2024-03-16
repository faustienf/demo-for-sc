import { useCallback } from 'react';
import {
  TableProductColumns,
  TableProductPlaceholders,
  generateProduct,
} from '../entities/product';
import { Page } from '../shared/page';
import { Table } from '../shared/table';
import { TableCaption } from '../shared/table-caption';
import { Button } from '../shared/button';
import { useAppDispatch, useAppSelector } from './store';
import { productsSlice } from './products-slice';
import { TableProductRowWrap } from './table-product-row-wrap';

export const ReduxState = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleAddProduct = useCallback(() => {
    dispatch(productsSlice.actions.add(generateProduct()));
  }, [dispatch]);

  return (
    <Page>
      <Table>
        <TableCaption>
          <Button onClick={handleAddProduct}>Add product 🍗</Button>
          <span>Redux</span>
        </TableCaption>
        <thead>
          <TableProductColumns />
        </thead>
        <tbody>
          {products.map((product) => (
            <TableProductRowWrap key={product.id} product={product} />
          ))}
          {products.length < 1 && <TableProductPlaceholders rowsCount={1} />}
        </tbody>
      </Table>
    </Page>
  );
};
