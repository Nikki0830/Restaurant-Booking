import React from 'react';
import {Link} from 'react-router-dom';

const Header= () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-inverse">
            <div classNaame="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Edumato</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/viewBooking">Order</Link></li>
            </ul>
            </div>
        </div>
        </nav>
</React.Fragment>

    )
}       
export default Header;