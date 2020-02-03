import React from 'react';
import Map from "./map"

const Menu = () => {
    return (

    <div className="menu-box">
    <div className="menu" id="Menu">
        <h2>Menu</h2>

        
        <div className="image"></div>
        <h4>Coffee</h4>
        <ul className="coffee-list">
            <li><p>Mawa's Blend Vintage</p></li>
            <li><p>Cold Press</p></li>
            <li><p>Drip Coffee</p></li>
            <li><p>Rotating Roasters</p></li>
            <li><p>Nitro cold Brew </p> </li>
            <li><p>Classic Coffee </p></li>
            <li><p>Coffee Au Lait</p></li>
            <li><p>Iced Coffee</p></li>
        </ul>

        <div className="image"></div>
        <h4>Espresso</h4>
        <ul className="coffee-list">
            <li> <p>Macchiato</p></li>
            <li><p>Americano</p></li>
            <li><p>Capuccino</p></li>
            <li><p>Mocha</p></li>
            <li><p>Latte</p></li>
            <li><p>Hot Chocolatte</p></li>
            <li><p>Vanilla Latte</p></li>
        </ul>

        <div className="image"></div>
        <h4>Tea</h4>
        <ul className="coffee-list">
            <li><p>Chai</p></li>
            <li> <p>Chai Au Lait </p> </li>
            <li>
                <p>Iced Tea</p>
                <p>Black</p> 
                <p>White</p> 
            </li>
            <li><p>Black</p></li>
            <li><p>Green</p></li>

        </ul>

        <div className="image"></div>
        <h4>Other Drinkings</h4>
        <ul className="coffee-list">
            <li>Bottled Water</li>
            <li>Doke  </li>
            <li>Diet Coke  </li>
            <li>Orange Juice  </li>
            <li>Lemondade  </li>
            <li>Vitamin Water  </li>
        </ul>

        <div className="image"></div>
        <h4>Food</h4>

        <ul className="coffee-list">    
            <li>
                <p>Beignets</p>
                <p>A doughnut-style pastry, traditionally fried and then served with powdered sugar.</p>

            </li>
            <li>
                <p>Samosas</p>
                <p>is a fried pastry with a spicy filling, such as spiced potatoes, onions, peas, meat, or lentils. (Vegetarian options available).</p>
            </li>
        </ul>

        <div className="image"></div>
        <h4>Smoothies</h4>
        <ul className="coffee-list">
        <li> 
                <p>Strawberry Blueberry </p>
                <p>Strawberry blended with blueberry juice</p>
            </li>
            <li> 
                <p>Banana Power</p>
                <p>Bananan blended with vanilla yogurt</p>
            </li>
            <li> 
                <p>Peach-Mango Banana</p>
                <p>Peaches, Mangoes and Banana blended with other natural falvors</p>
            </li>
            <li> 
                <p>Strawberry Banana</p>
                <p>Strawberries blended with banana and apple juice.</p>
            </li>
                
        </ul>

        <hr/>
        <Map/>
    </div> 
    </div>
    );
}
 
export default Menu;
 




