import React, { Component } from 'react';

import './signin.scss';

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
                    <input id="email" name="email" type="mail" value={this.state.email} required/>
                    <label for="email">Email</label>
                    <input id="password" name="password" type="password" value={this.state.password} />
                    <label for="password">Password</label>

                    <input type="submit" value="Submit form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;