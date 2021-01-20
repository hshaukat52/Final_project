import React from 'react'
import { Link } from "react-router-dom";

const Loginhome = () => {
    return (
        <div>
        <div className="nav">
                    <div className="nav_text">
                        <div className="nav_text1">
                            <h3>FoodHub</h3>
                        </div>
                        <ul className="nav_ul">
                            <Link to="/" className="login_1">
                            <li>
                                Username
                            </li>
                            </Link>
                            <Link to="/Register" className="registration_1">
                            <li>
                                Register
                            </li>
                            </Link>
                            <Link to="/login" className="registration_1">
                            <li>
                                Logout
                            </li>
                            </Link>
                        </ul> 
                    </div>
        </div> 
        <div className="banner_content">
                <div className="container">
                    <div className="banner_text">
                        <h1> Safe Food <br/> Delivery</h1> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti rerum beatae dolorum tempore,
                            quam itaque libero debitis temporibus nisi ipsam! 
                        </p>
                        <div className="order_now">
                            <Link to="/login" className="btn btn-smart">
                                ORDER NOW
                            </Link>
                        </div>
                    </div>                         
                </div> 
            </div>
        </div>
                
    )
}

export default Loginhome
