import React from 'react'
import { Link } from "react-router-dom";

const Bottom = () => {
    return (
        <div className="bottom_part">
            <div className="container-1">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3 className="bottom-1">FoodHub for Business</h3>
                        <p className="bottom-2">Get more out of your Business, 
                            without losing focus on what its most important
                            - delighting your customers
                        </p>
                        <div className="get_started">
                            <Link to="/Getstarted" className="btn1 btn-started">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3>FoodHub NewsLetter</h3>
                        <p className="bottom-3"> Stay update with the new offer from FoodHub</p>
                        <input type="text" className="bottom-5"/>
                        <Link to="/Search" className="btn2 btn-search">Search</Link>
                    </div>
                    <div className="col-6">
                        <h3>Resources/Stack Used</h3>
                        <p className="bottom-4">
                            -React Material UI Redux <br/>
                            -NodeJs <br/>
                            -Express <br/>
                            -MongoDB <br/>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Bottom
