import React from 'react';

import './login.scss';

import SignIn from '../../components/sing-in/signin.comp';
import SignUp from '../../components/sing-up/signup.comp';

const SingInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
    
);

export default SingInAndSignUpPage;