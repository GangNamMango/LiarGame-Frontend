import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavContainer.css';
const NavContainer = () => {
    const [Popup,setPopup] = useState(false);
    return(
        <div className="Nav_area">
            <div className={Popup ? "Nav_close" : "Nav_open"} Popup={Popup} onClick={()=> setPopup(!Popup)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={Popup ? "bg" : ""}></div>
            <div className={Popup ? "popup_area" : "hidden"}>
                <ul>
                    <li>게임방법</li>
                    <li>방 만드는 법</li>
                    <li>참여하는 법</li>
                </ul>
            </div>
        </div>
    )
}

export default NavContainer;