import React from "react";
import TopBarButtons from './TopBarButtons';
import SearchBar from "./SearchBar";
import logo from './unnamed.png'
import Link from "next/link";
function TopBar(){
    return(
        <div id="TopBar">
            <a  id='TopBarLogo'href="/">
                <img id='logo' src='./unnamed.png' alt="logo"className="TopImage"/>
            </a>
            <SearchBar/>
            <Link id='InicioSesion' href='/iniciosesion'>Iniciar Sesion</Link>
        </div>
    );
}

export default TopBar