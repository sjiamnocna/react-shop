import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border-color: black;
    }
`;
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border-color: black;

    &:hover {
    background-color: black;
    color: white;
    }
`;
const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border-color: transparent;
    }
`;
const getButtonStyles = props => {
        if (props.googleSignIn) {
            return GoogleSignInStyles;
        }
        return props.inverted ? invertedButtonStyles : buttonStyles;
    };
    
const CustomButtonContainer = styled.button`
    min-height: 50px;
    margin: 2px;
    padding:.5em 10px;
    border: 1px solid transparent;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;

    ${getButtonStyles}
`;

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;