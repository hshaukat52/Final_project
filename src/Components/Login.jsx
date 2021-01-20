
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Loginform from "./Loginform";
// import  NoMatch  from "./NoMatch";
import { BrowserRouter as  Switch, Route  } from "react-router-dom";

class Login extends Component {
    state={
        islog:false
    }
    handlelogin =(islog) => this.setState({islog})
    render(){
        const {islog} = this.state;
        return (
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
                
                <div className="form1">
                    <Switch>  
                        <Route render={() => !islog? <Loginform isLogin={this.handlelogin}/>: <Link to="/loginUsername"> <h3>Successfully login <br/> Click here to Continue</h3></Link>}/>
                        {/* <Route path="/" component={NoMatch} />  */}
                    </Switch>
                </div>
            </div>

        )
    }
}

export default Login
