import React from "react";
import '../stylesheets/Header.css'
import DisplayToggle from './DisplayToggle';
import Searchbar from './Searchbar';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"><span className="karma">KARMA</span><span className="police">POLICE</span></h1>
            <div className="rightSide">
                <DisplayToggle id="icon"/>
                <Searchbar />
            </div>
        </div>
    );
}

export default Header;