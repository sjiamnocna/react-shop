import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart/icon/icon.comp';
import CartDropdown from '../cart/dropdown/dropdown.comp';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SING OUT</div>
                    :
                    <Link className='option' to='/signin'>SING IN</Link>
            }
            <CartIcon />

        </div>
        {hidden ? null : <CartDropdown />}
    </div>
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