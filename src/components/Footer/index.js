import React from 'react';
import { FooterBase } from './styles';
import Logo from '../img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="LaneriFlix Logo" />
      </a>
      <p>
        Projeto Laneriflix desenvolvido durante a Imersão React da Alura.
      </p>
    </FooterBase>
  );
}

export default Footer;
