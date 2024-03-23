import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #151020;
  border-radius: 0.4rem;
  padding: 2rem;

  &:hover {
    .image {
      img {
        transform: scale(1.1);
      }
    }
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 24.3rem;
  overflow: hidden;
  border-radius: 0.4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
`;

export const CardInfo = styled.div`
  margin-top: 1.6rem;
`;

export const CardName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const CardDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CardDetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CardDetailsItemText = styled.p`
  font-size: 1.2rem;
`;

export const CardDetailsItemTextValue = styled.p`
  font-size: 1.4rem;
`;
