import React from 'react';
import Hours from "./hours"


const map = () => {
    return ( 
        <div className="twogrid">
            <Hours/>
            <div className="map-cont"><iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.642183084955!2d-93.31648808661842!3d44.99884693220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU5JzU1LjIiTiA5M8KwMTgnNTEuMyJX!5e0!3m2!1sen!2sus!4v1575916150445!5m2!1sen!2sus" ></iframe></div>
        </div>

     );
}
 
export default map;