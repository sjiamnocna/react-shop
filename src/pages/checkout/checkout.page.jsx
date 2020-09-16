import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import CheckoutItem from '../../components/checkout/item/checkout-item.comp';

const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    button {
        margin-left: auto;
        margin-top: 50px;
    }
`;
const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;
const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
    }
`;
const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;
const WarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
    span{
        margin:10px;
    }
`;

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>

        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }

        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>

        <WarningContainer>
            <h3>Toto je testovací brána, neplaťte reálnou kartou!</h3>
            Prosím použijte tuto testovací kartu:<br />
            <span className="card">4242 4242 4242 4242</span>
            <span className="expiry">12/22</span>
            <span className="cvv">123</span>
        </WarningContainer>

        <StripeCheckoutButton price={total} />

    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);