import React from 'react';
import Imge from "../images/samosaSm.png"
import Hours from "./hours"  //the imported word has to be capitalize even if its not in original file

const beignets = () => {
    return ( 
        <div className="samosa-box">

        <div className="samosa">
            <h2>SAMOSA</h2>
            <p>is a fried pastry with a spicy filling, such as spiced potatoes, onions, peas, meat, or lentils. (Vegetarian options available).</p>
            <hr/>
            <div className='twogrid'>
                <Hours/>
                <div className="beignets-info">
                    <h4>Cafe Mawa Since 2019</h4>
                    <p>brought you this taste and many other</p>
                    <img src={Imge}/> 
                </div>
            </div>
        </div>
        </div>

     );
}
 
export default beignets;