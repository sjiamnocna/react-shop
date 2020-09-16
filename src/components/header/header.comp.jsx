import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart/icon/icon.comp';
import CartDropdown from '../cart/dropdown/dropdown.comp';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`,
    HeaderContainer = styled.div`
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
`,
    LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 25px;
`,
    OptionsContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `,
    OptionLink = styled(Link)`
        ${OptionContainerStyles}
    `,
    OptionDiv = styled(Link)`
        ${OptionContainerStyles}
    `
    ;

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SING OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SING IN</OptionLink>
            }
            <CartIcon />

        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);