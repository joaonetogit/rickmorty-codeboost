/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoadMoreApp = styled.button`
  display: block;
  font-size: 1.8rem;
  line-height: 6.5rem;
  background-color: rgb(0, 181, 204);
  border-radius: 0.6rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 4.8rem;
  cursor: pointer;
  border: 4px solid #b2df28;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;