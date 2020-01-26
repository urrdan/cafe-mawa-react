import React from 'react';
import Imge from "../images/beignets.png"
import Hours from "./hours"  //the imported word has to be capitalize even if its not in original file

const beignets = () => {
    return ( 
        <div className="beignets-box">
        <div className="beignets">
            <h2>BEIGNETS</h2>
            <p>A doughnut-style pastry, traditionally fried and then served with powdered sugar.</p>
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