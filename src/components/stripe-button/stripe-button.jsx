import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100,
        publishableKey = "pk_test_51HPBesJ4BzDYH3VJqcSahHWFwrlaMnNbRWUw3lGetEd1Uy0iuVyKdsdF9QQHXD5NRmANdbz9tKLluUiVSRZo2pcC00tVlWv3jo",
        onToken = token => {
            console.log(token);
            alert("Platba byla úspěšná");
        };

    return (
        <StripeCheckout
            label="Zaplatit"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Celková částka: ${price}`}
            amount={priceForStripe}
            panelLabel="Zaplaťte ihned"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;