import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h2>Choose Payment Method</h2>
      <select>
        <option>CC Avenue</option>
        {/* Add other payment methods */}
      </select>
    </div>
  );
}

export default PaymentMethod;
