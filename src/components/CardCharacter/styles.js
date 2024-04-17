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
  object-position: top;
  transition: all 0.3s ease;
`;

export const SCardInfo = styled.div`
  margin-top: 1.6rem;
`;

export const SCardWrapperName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding: 0 0 0.8rem;
  border-bottom: 1px solid #2d2d2d;
`;

export const SCardName = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;
