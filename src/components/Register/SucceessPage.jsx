import React from 'react';

const SuccessPage = () => {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. For more details, please contact us:</p>
      <div>
        <a href="mailto:support@stripeconferences.com">support@stripeconferences.com</a>
      </div>
      <br />
      <a href="/register">Return to Register Page</a>
    </div>
  );
};

export default SuccessPage;
