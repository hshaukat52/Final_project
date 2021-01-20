import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="navbar_text">
                <div className="name_tag">
                    <h1>FoodHub</h1>   
                </div>
                    <ul className="navbar_ul">
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
    )
}

export default Navbar;