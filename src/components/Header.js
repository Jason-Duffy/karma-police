import React from "react";
import '../stylesheets/Header.css'
import DisplayToggle from './DisplayToggle';
import Searchbar from './Searchbar';

const Header = () => {
    return (
        <div class="header">
            <h1 class="logo"><span class="red">KARMA</span><span class="pink">POLICE</span></h1>
            <DisplayToggle />
            <Searchbar />
        </div>
    );
}

export default Header;