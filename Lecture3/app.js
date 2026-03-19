import React from "react";
import ReactDOM from "react-dom/client";

const jsx=<h1>food ordering app</h1>
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header=()=>{
    return (


        <div className="header">
        <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />

        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>  

        </div>

        </div>
    );
};

const RestaurantCard=()=>{
    return (
        
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/aqsnrylokzpn45qhg1pb"
                   className="res-logo"
                   alt="res-logo"

            />
            <h3>Meghana foods</h3>
            <h4>Banglore,North India,Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}



const Body=()=>{
    return (

        <div className="Body">
       <div className="search">Search</div>
        <div className="res-container">
        <RestaurantCard/>

            
        </div>

        </div>



    );
}

const AppLayout=()=>{
    return (
        <div className="app">
        <Header/>
        <Body/>

        </div>


    )

}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);