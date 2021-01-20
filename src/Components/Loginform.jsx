import React, { Component } from 'react'

class Loginform extends Component{
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
        )
    }
}

export default Loginform
