import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component{
    state={
        email:'',
        pwd:''
    }
    handlechange = (e) =>{
        const {name,value}= e.target
        this.setState({[name]:value})
    }
    handlesubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }

    render(){
        return (
            <div>
            <div className="container-2">
                <div className="nav">
                    <div className="nav_text">
                        <div className="nav_text1">
                            <Link to="/">
                            <h1>Food Hub </h1>
                            </Link>
                        </div>
                        <ul className="nav_ul">
                            <Link to="/login" className="login_1">
                            <li>
                                Login
                            </li>
                            </Link>
                            <Link to="/Register" className="registration_1">
                            <li>
                                Register
                            </li>
                            </Link>
                        </ul> 
                    </div>
                </div> 
            </div>
            
                
            <div className="background_image">
            <div className="login_text">
            <div className="login_text2">
               
            </div>
            <div className="login_text3">
                <h1> Login Form</h1>
                <form onSubmit={this.handlesubmit} >
                    <p className="login_text4">Enter your Email</p>
                    <input type="email" className name="email" placeholder='Email'required onChange={this.handlechange}/> <br/>
                    <p className="login_text5">Enter your Password</p>
                    <input type="password" name="pwd" placeholder="Password" required onChange={this.handlechange}/>  <br/>
                    <button className="button1" onSubmit={this.handlesubmit} > Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Register
