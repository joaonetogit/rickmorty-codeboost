import styled from 'styled-components';

export const SCardContainer = styled.div`
  width: 100%;
  background-color: #151020;
  border-radius: 0.4rem;
  padding: 2rem;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const SCardImageContaniner = styled.div`
  width: 100%;
  height: 24.3rem;
  overflow: hidden;
  border-radius: 0.4rem;
`;

export const SCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

export const SCardInfo = styled.div`
  margin-top: 1.6rem;
`;

export const SCardName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`;

export const SCardDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SCardDetailsItem = styled.li`
  display: block;
  font-size: 1.4rem;
`;
