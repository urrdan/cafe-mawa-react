import React from 'react';
import Map from "./map"

const Menu = () => {
    return (

    <div className="menu-box">
    <div className="menu" id="Menu">
        <h2>Menu</h2>
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
                <p>—  CRAFTED PRESS  —</p>
                <p>Smooth, slow-crafted, cold-filtered coffee steamed with a splash of milk and real sugar.</p>
            </li>
            <li>
                <p>— LATTE —</p>
                <p>Rich espresso combined with creamy steamed milk.</p>
            </li>
            <li>
                <p>—  MOCHA —</p>
                <p>Real chocolate melted into steamed milk, combined with our rich espresso and topped with whipped cream and chocolate chips.</p>
            </li>
            <li>
                <p>—  CAPPUCCINO —</p>
                <p>Rich espresso blended with steamed milk and topped with a deep layer of foam.</p>

            </li>
            <li>
                <p>—  AMERICANO  —</p>
                <p>Rich espresso and hot water create this bolder version of traditional brewed coffee.</p>
            </li>
            <li>
                <p>—  MACCHIATO  —</p>
                <p>Espresso topped with steamed milk foam.</p>
            </li>
            <li>
                <p>— BREVE —</p>
                <p>Rich espresso combined with steamed half & half.</p>
            </li>
            
            <li>
                <p>—  HOT CHOCOLATE —</p>
                <p>Real chocolate melted into steamed milk and topped with whipped cream and chocolate chips.</p>
            </li>
            <li>
                <p>—  MATCHA VANILLA TEA LATTE  —</p>
                <p>Matcha Powder steamed into coconut milk and sweetened with vanilla.</p>
            </li>


            <li>
                <p>— CARAMEL HIGH RISE —</p>
                <p>Freshly steamed milk with espresso and caramel topped with whipped cream and caramel sauce.</p>
            </li>
            <li>
                <p>—  TURTLE MOCHA  —</p>
                <p>Real chocolate melted into steamed milk and combined with our rich espresso and caramel. Topped with whipped cream, caramel sauce, and turtle pieces.</p>
            </li>
            <li>
                <p>—  MINT CONDITION MOCHA —</p>
                <p>Real chocolate melted into steamed milk and combined with our rich espresso and mint flavor. Topped with whipped cream and chocolate mints.</p>
            </li>
            <li>
                <p>—  BERRY WHITE MOCHA —</p>
                <p></p>
            </li>
            <li>
                <p>—  CAMPFIRE MOCHA —</p>
            </li>
            <li>
                <p>—  VANILLA WHITE MOCHA  —</p>
            </li>
            <li>
                <p>—  HOT APPLE BLAST —</p>
                <p>Apple cider, caramel sauce and cinnamon flavor topped with whipped cream, caramel and cinnamon.</p>
            </li>
            <li>
                <p>—  CHAI TEA LATTE  —</p>
                <p>Spiced black tea blended with steamed milk.</p>
            </li>
            <li>
                <p>— CHAI AU LAIT —</p>
                <p>Spiced black tea with steamed milk.</p>
            </li>
            <li>
                <p>—  HOT TEA  —</p>
                <p>Earl Grey, Hot Cinnamon Spice, Mango Black, Citron Green, Mint Verbena</p>
            </li>
            <li>
                <p>—  CABIN BAR CRAFTED PRESS  —</p>
                <p>Cold press steamed with a splash of milk and hints of chocolate, butterscotch and peanut butter.</p>
            </li>
            <li>
                <p>—  CARAMEL COOLER  —</p>
                <p>Coffee blended with ice and real caramel. Topped with whipped cream and caramel drizzle. </p>
            </li>
            <li>
                <p>—  CHOCOLATE COOLER  —</p>
                <p>Coffee blended with ice and premium chocolate. Topped with whipped cream and chocolate drizzle.</p>
            </li>
            <li>
                <p>— VANILLA COOLER   —</p>
                <p></p>
            </li>
            <li>
                <p>—  COFFEE COOLER  —</p>
                <p></p>
            </li>
            <li>
                <p>— CRAFTED PRESS – BLENDED   —</p>
                <p></p>
            </li>
            <li>
                <p>— NORTHERN LITE CARAMEL COOLER —</p>
                <p>40% fewer calories than the original. Coffee blended with ice and caramel flavor.</p>
            </li>
            <li>
                <p>— NORTHERN LITE VANILLA COOLER —</p>
                <p>40% fewer calories than the original. Coffee blended with ice and vanilla flavor.</p>
            </li>
            <li>
                <p>— NORTHERN LITE COFFEE COOLER  —</p>
                <p>40% fewer calories than the original. Coffee blended with ice.</p>
            </li>
            <li>
                <p>— FROZEN HOT CHOCOLATE —</p>
                <p>Chocolate and cocoa powder blended with ice, half & half and our signature shake mix. Topped with whipped cream and chocolate drizzle.</p>
            </li>
            <li>
                <p>—  COOKIES & CREAM COFFEELESS COOLER  —</p>
                <p>Cookies blended with vanilla, chocolate, half & half and our signature shake mix. Topped with whipped cream and more cookies.</p>
            </li>
            <li>
                <p>—  STRAWBERRY BANANA SMOOTHIE  —</p>
                <p>A blend of all-natural yogurt with strawberry and banana puree and ice.</p>
            </li>
            <li>
                <p>—  MANGO ORANGE KEY LIME SMOOTHIE  —</p>
                <p>A blend of all-natural yogurt with mango, orange and key lime purees and ice.</p>
            </li>
            <li>
                <p>—  SPICY MOCHA COOLER  —</p>
                <p>Coffee blended with ice, chocolate and flavors of chipotle and ancho chiles. Topped with whipped cream and chocolate drizzle.</p>
            </li>
            <li>
                <p>—  CABIN BAR MOCHA – COOLER  —</p>
                <p></p>
            </li>
            <li>
                <p>—  ICED LATTE  —</p>
                <p>Rich espresso and cold milk served over ice.</p>
            </li>
            <li>
                <p>—  ICED MOCHA  —</p>
                <p>Rich espresso, premium chocolate, and ice cold milk.</p>
            </li>
            <li>
                <p>—  COLD PRESS ICED COFFEE  —</p>
                <p>Smooth, slow-crafted, cold-filtered coffee with a splash of milk and real sugar.</p>
            </li>
            <li>
                <p>—  NITRO COLD PRESS*  —</p>
                <p>Caribou Blend cold press coffee infused with nitrogen for a creamy, smooth coffee that’s rich in flavor. Not available in all locations.</p>
            </li>
            <li>
                <p>—  DRAFT MOCHA*  —</p>
                <p>Creamy, smooth Nitro Cold Press combined with milk and premium chocolate. Not available in all locations.</p>
            </li>
            <li>
                <p>—  ICED AMERICANO  —</p>
                <p>Rich espresso combined with water and chilled with ice</p>
            </li>
            <li>
                <p>—  ICED CARAMEL HIGH RISE  —</p>
                <p>Espresso and caramel with milk and served over ice.</p>
            </li>
            <li>
                <p>—  DRAFT HIGH RISE*  —</p>
                <p>Creamy, smooth Nitro Cold Press combined with milk and real caramel; topped with espresso whipped cream. Not available in all locations.</p>
            </li>
            <li>
                <p>—    —</p>
                <p></p>
            </li>

        </ul>
        <hr/>
        <Map/>
    </div> 
    </div>
    );
}
 
export default Menu;
 




