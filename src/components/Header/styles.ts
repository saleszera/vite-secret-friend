import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  div {
    background-image: url('/src/assets/images/logo.svg');
    background-repeat: no-repeat;
    width: 351px;
    height: 117px;
  }

  img {
    z-index: 1;
  }

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;

    div {
      background-image: url('/src/assets/images/smallLogo.svg');
      width: 235px;
      height: 199px;
    }
  }
`;
