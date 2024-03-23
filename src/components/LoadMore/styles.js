/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoadMoreApp = styled.button`
  display: block;
  font-size: 1.6rem;
  line-height: 1;
  background-color: rgb(0, 181, 204);
  border-radius: 0.6rem;
  padding: 16px 0;
  width: 100%;
  max-width: 16rem;
  margin: 4.8rem auto 0;
  cursor: pointer;
  border: 2px solid #b2df28;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
