import React from 'react';
import Logo from '../../assets/logo.png';
import { HeaderApp } from './styles';

function Header({ numberCharacters }) {
  return (
    <HeaderApp>
      <img src={Logo} alt="Logo" data-aos="fade-right" data-aos-delay="200" />
      <span data-aos="fade-left" data-aos-delay="200">
        Número de personagens:
        {` ${numberCharacters}`}
      </span>
    </HeaderApp>
  );
}

export default Header;
