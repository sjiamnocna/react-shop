import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/sing-in/signin.comp';
import SignUp from '../../components/sing-up/signup.comp';

const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SingInAndSignUpPage = ()=>(
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
    
);

export default SingInAndSignUpPage;