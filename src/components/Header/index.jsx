import React from 'react';
import Logo from '../../assets/logo.png';
import {
  SHeader,
  SHeaderButtonLogo,
  SHeaderLogo,
  SHeaderText,
  SHeaderTitle,
  SHeaderWrapperTexts,
} from './styles';

export default function Header({ numberCharacters, onClickLogo }) {
  return (
    <SHeader>
      <SHeaderButtonLogo
        type="button"
        onClick={onClickLogo}
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <SHeaderLogo src={Logo} alt="Logo" />
      </SHeaderButtonLogo>
      <SHeaderWrapperTexts data-aos="fade-left" data-aos-delay="200">
        <SHeaderTitle>Number of characters:</SHeaderTitle>
        <SHeaderText>{numberCharacters}</SHeaderText>
      </SHeaderWrapperTexts>
    </SHeader>
  );
}
