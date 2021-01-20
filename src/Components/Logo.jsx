import React from 'react'
import Navbar from './Navbar';
import Center from "./Center";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="banner">
            <Navbar/>
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
            <Center/>
            <Bottom/>
        </div>
    )
}

export default Logo
