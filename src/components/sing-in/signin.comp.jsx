import React from 'react';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../button/button.comp';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        e.preventDefault();
        const { value, name } = e.target;

        this.setState({ [name]: value });

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;