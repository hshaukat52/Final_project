import React, { Component } from 'react'
import burger from "../template/chickenburger.jpg";


class Address extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation=this.getLocation.bind(this);
        this.getCoordinates=this.getCoordinates.bind(this);
        // this.reverseGeocodeCoordinates= this.reverseGeocodeCoordinates.bind(this);
    }
    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }
    getCoordinates(position){
        this.setState({
             latitude: position.coords.latitude,
             longitude: position.coords.longitude
           
        })
    }
    // async reverseGeocodeCoordinates(){
    //     await fetch( `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensors=false&key=${AIzaSyA0QP9iq8ZIUunsOTsoe4XRnELm2zE96Bk}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => alert(error))
    // }
    handleLocationError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
          default :
            alert("An unknown error occurred.")

        }
      }
    
    render (){    
        return (
            <div>
                <button onClick={this.getLocation} >
                        Get Your Location
                </button> <br/>
                  Latitude= {this.state.latitude};
                  Longitude= {this.state.longitude};
                <div> <br/><br/>
                <img className="w-100" src={burger} alt="abc"/>
                {/* <img src="../coldcoffee.jpg" alt=""></img>
                <img src="../parathroll.jpg" alt=""></img>
                <img src="../zinger-shawarma" alt=""></img> */}
                </div>
               
            </div>
            
        )
    }
}

export default Address;

// AIzaSyA0QP9iq8ZIUunsOTsoe4XRnELm2zE96Bk