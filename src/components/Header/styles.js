import styled from 'styled-components';

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 610px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const SHeaderButtonLogo = styled.button`
  background: none;
`;

export const SHeaderLogo = styled.img`
  cursor: pointer;
`;

export const SHeaderWrapperTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SHeaderTitle = styled.p`
  font-size: 1.8rem;
`;

export const SHeaderText = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;
