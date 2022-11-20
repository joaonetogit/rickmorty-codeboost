import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 100%;
  background-color: #151020;
  border-radius: 0.4rem;
  padding: 2rem;

  .image {
    width: 100%;
    height: 24.3rem;
    overflow: hidden;
    border-radius: 0.4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    margin-top: 1.6rem;

    .name {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .details {
      list-style: none;
      display: flex;

      li {
        display: block;
        font-size: 1.4rem;

        &:last-child {
          &:before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #fff;
            vertical-align: middle;
            opacity: 0.4;
            border-radius: 50%;
            margin: 0 0.8rem;
          }
        }
      }
    }
  }
`;
