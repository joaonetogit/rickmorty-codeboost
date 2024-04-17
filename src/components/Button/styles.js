/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SButton = styled.button`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 2.4rem;
  background-color: rgb(0, 181, 204);
  border-radius: 0.6rem;
  max-width: 12rem;
  flex: 1;
  cursor: pointer;
  border: 2px solid #b2df28;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.6);
  }
`;
