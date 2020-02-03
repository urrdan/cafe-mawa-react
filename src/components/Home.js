import React from 'react';
import Map from "./map"
import {NavLink} from 'react-router-dom';
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import logo from '../images/logo.png'


const Home = () => {
    return (
        <div className='Home'>
        <div className="intro">
        <div id='iio' className="display carousel slide" data-ride='carousel' data-pause="false" >

            <div className="carousel-inner">
                <div className="carousel-item active"></div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
            </div>

            <ul className="carousel-indicators">
                <li data-target="#iio" data-slide-to='0' className="active"></li>
                <li data-target="#iio" data-slide-to='1'></li>
                <li data-target="#iio" data-slide-to='2'></li>
                <li data-target="#iio" data-slide-to='3'></li>
            </ul>
            
            <a href="#iio" className="carousel-control-prev" data-slide='prev'>
                <span className="carousel-control-prev-icon"></span>
            </a>

            <a href='#iio' className="carousel-control-next" data-slide='next'>
                <span className="carousel-control-next-icon"></span>
            </a>

            <p>Where gravitas blends with food!</p>
        </div>
        </div>
        <div className="about">
            <h2>Welcome to Café Mawa. </h2>
            <p> We are a Twin Cities based retailer that cultivates relationships with those who share our desire and vision to source, and serve exceptional pastries and various exotic blended drinks.</p>
            <p>At Café Mawa, our customers are our priority, and we take pride in our services and food our customers’ satisfaction. Our Beignets and Samosas are always served fresh and fried to order. Our Beignets are served in order of three pieces, while the Samosas are sold individually. Both items are best paired with any of our exotic drinks. </p>
            <p>Our Mission: To meet our customer’s needs through our exceptional diversified foods.</p>
        </div>

        <div className="home-menu">
        <h2>OUR MENU</h2>
        <ul className="coffee-list">
            <li>
                <p>—COFFEE—</p>
                <p>Our selection of black coffees is freshly brewed to our customers’ satisfaction..</p>
            </li>
            <li>
                <p>—  LATTE —</p>
                <p>Espresso combined with steamed milk..</p>
            </li>
            <li>
                <p>—CAFFE MOCHA —</p>
                <p>Chocolate-flavored with steamed milk and Espresso with whipped cream and chocolate chips.</p>
            </li>
            <li>
                <p>—CAPPUCCINO —</p>
                <p>Espresso with steamed milk and topped with a layer of foam.</p>
            </li>
            <li>
                <p>—AMERICANO —</p>
                <p>Espresso over hot water create this version of traditional brewed coffee.</p>
            </li>
        </ul>
        <NavLink to='/menu' >See all the menu . . . .</NavLink>
        </div>

        <Map/>

        <div className="media">
            <section>
                <img src={instagram} alt='Home'/>
                <p>cafe_mawa</p>
            </section>
            <section>
                <img src={facebook} alt='Home' />
                <p>cafe_mawa</p>
            </section>
        </div>
    
    </div>

    );
}
 
export default Home;