import React from 'react';
import Map from "./map"


const Contact = () => {
    return (
    <div className="-box">
    <div className="Contact">
        <div className="cont-info">
            <h4>Get In Touch</h4>
            <p>|info@cafemawa.com</p>
            <p>|612-458-7154</p>
            <p>|www.cafemawa.com</p>
        </div>
        <div className="sendMessage"> 
            <div>          
                <input className="inputs" type="text" placeholder="Name"></input>
                <input className="inputs" type="text" placeholder="E-mail"></input>
            </div> 
            <textarea className="inputs" placeholder="Message"></textarea>
            <button type="submit">Submit</button>      
        </div>
        
    </div>
    <hr/>
    <Map/>
    </div>

    );
}
 
export default Contact;