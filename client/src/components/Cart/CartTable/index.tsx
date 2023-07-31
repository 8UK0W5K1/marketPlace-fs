/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CartFooter from '../CartFooter';

interface CartTableProps {
  children?: React.ReactNode;
}

interface CustomThProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  width?: number;
}

const thProps: CustomThProps = {
  width: 120, // Remplacez la valeur par celle souhaitée
};
const thProps2: CustomThProps = {
  width: 200, // Remplacez la valeur par celle souhaitée
};

const CartTable: React.FC<CartTableProps> = ({ children }) => {
  return (
    <>
      <div className='card'>
        <table className='table table-borderless table-shopping-cart'>
          <thead className='text-muted'>
            <tr className='small text-uppercase'>
              <th scope='col'>Product</th>
              <th scope='col' {...thProps}>
                Quantity
              </th>
              <th scope='col' {...thProps}>
                Price
              </th>
              <th scope='col' className='text-right' {...thProps2}>
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        <CartFooter />
      </div>
      <div className='alert alert-success mt-3'>
        <p className='icontext'>
          <i className='icon text-success fa fa-truck'></i> Free Delivery within
          1-2 weeks
        </p>
      </div>
    </>
  );
};
export default CartTable;
