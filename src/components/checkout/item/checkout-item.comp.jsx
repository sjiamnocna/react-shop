import React from 'react';

import './checkout-item.scss';

export const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item image" src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button">&#10005;</span>
    </div>
);