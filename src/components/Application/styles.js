import styled from 'styled-components';
import img from '../../assets/bg.jpg';

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.6rem;
`;

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }

  h1 {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    opacity: 0.75;
  }
`;

export const ContentCharacters = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  button {
    display: block;
    font-size: 1.8rem;
    line-height: 6.5rem;
    background-color: rgb(0, 181, 204);
    border-radius: 0.6rem;
    width: 30rem;
    margin: 0 auto;
    margin-top: 4.8rem;
    cursor: pointer;
    border: 4px solid #b2df28;
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2022;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040011;
`;

export const Background = styled.div`
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
