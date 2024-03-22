/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import img from '../../assets/bg.jpg';

export const BackgroundApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${img}) no-repeat center center;
  background-size: cover;
  z-index: -1;
  opacity: 0.35;
`;
