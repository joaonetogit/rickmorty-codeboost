/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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
