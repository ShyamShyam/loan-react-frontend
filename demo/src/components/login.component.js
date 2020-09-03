import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange  = this.onChange.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8001/login/getUserDetails?username=xyz@gmail.com')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        }

    onSubmit = e =>{
        e.preventDefault();
    }
    onChange = e =>{
        this.setState({[e.target.username]: e.target.value});
        console.log(e.target.value);
    }

    render(){
        const {username, password, error, isLoading} = this.state;
        return(
            <div className="auth-inner">
            <form onSubmit={this.onSubmit} noValidate>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                        className="form-control" 
                        value={this.username} 
                        placeholder="Enter email" 
                        onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control" 
                        value={this.password} 
                        placeholder="Enter password"
                        onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <Link to='/forgot-pass'>password?</Link>
                </p>
            </form>
            </div>
        );
    }
}
