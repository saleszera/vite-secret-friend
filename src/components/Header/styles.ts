import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  div {
    max-width: 351px;

    img {
      width: 100%;
    }
  }

  img {
    z-index: 1;
    image-rendering: pixelated;
  }

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;

    div {
      img {
        width: 60%;
      }
    }
  }
`;
