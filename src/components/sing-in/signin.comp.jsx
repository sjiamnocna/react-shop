import React from 'react';

import './signin.scss';

import FormInput from '../form-input/form-input.comp';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = e => {
        e.preventDefault();
        const {value, name} = e.target;

        this.setState({[name]: value});

    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                    name='email'
                    type='email'
                    handleChange = {this.handleChange}
                    value={this.state.email}
                    label='email'
                    required />
                    
                    <FormInput
                    name='password'
                    type='password'
                    handleChange = {this.handleChange}
                    value={this.state.password}
                    label='password'
                    required />

                    <input type="submit" value="Submit form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;