import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.scss';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_COfBxC88rN8jUrNEXBdTh4op00IjN8vjSf';

  const tokenHandler = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothes Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={tokenHandler}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
