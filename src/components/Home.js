import React from 'react';
import Map from "./map"
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div className='Home'>
        <div className="intro">
        <div id='iio' className="display carousel slide" data-ride='carousel' data-pause="false" >
            <div className="carousel-inner">
                <div className="carousel-item active"></div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
            </div>
            <ul className="carousel-indicators">
                <li data-target="#iio" data-slide-to='0' className="active"></li>
                <li data-target="#iio" data-slide-to='1'></li>
                <li data-target="#iio" data-slide-to='2'></li>
            </ul>
            <a href="#iio" className="carousel-control-prev" data-slide='prev'>
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a href='#iio' className="carousel-control-next" data-slide='next'>
                <span className="carousel-control-next-icon"></span>
            </a>
            <p>Everything's beautiful with coffee!</p>
        </div>
        </div>
        <div className="about">
            <h2>Welcome to Café Mawa. </h2>

            <p> We are a Twin Cities based retailer that cultivates relationships with those who share our desire and vision to source, and serve exceptional pastries and various exotic blended drinks.
            </p>
            <p>Our Mission: To meet our customer’s needs through our exceptional diversified foods.
            </p>
        
        </div>

        <div className="home-menu">
        <h2>OUR MENU</h2>
        <ul className="coffee-list">
            <li>
                <p>— DEPTH CHARGE —</p>
                <p>Black coffee spiked with a shot of espresso for an extra pick-me-up.</p>
            </li>
            <li>
                <p>—  CLASSIC COFFEE  —</p>
                <p>We rotate a selection of our regular and seasonal coffees and brew every hour to ensure maximum freshness.</p>
            </li>
            <li>
                <p>— LATTE —</p>
                <p>Rich espresso combined with creamy steamed milk.</p>
            </li>
        </ul>
        <NavLink to='/menu' >See all the menu . . . .</NavLink>
        </div>

        <Map/>
    
    </div>

    );
}
 
export default Home;