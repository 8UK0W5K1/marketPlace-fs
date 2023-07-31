import React from 'react';

interface PaymentProps {
  isValid?: boolean;
}

function Payment({ isValid }: PaymentProps) {
  return (
    <button
      className='btn btn-outline-primary btn-lg mt-3 btn-block'
      onClick={() => null}
      disabled={isValid}
    >
      Checkout
    </button>
  );
}
export default Payment;
