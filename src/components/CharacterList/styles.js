/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SGridCharacters = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;

  @media screen and (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`;
