import styled from 'styled-components';
import img from '../../assets/bg.jpg';

export const MainApp = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${img}) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.6rem;
`;
