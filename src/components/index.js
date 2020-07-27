import React from 'react';
import Logo from '../../src/img/logo.png';
import './menu.css'
import ButtonLink from './component/button';

function Menu () {
    return (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="LaneriFlix Logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
            Novo vídeo
        </ButtonLink>


    </nav>
    )
}
export default Menu;