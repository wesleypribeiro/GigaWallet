import styled from 'styled-components';

export const WalletHeader = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-between;
`;

export const HeaderLogo = styled.section`
  display: flex;
  align-items: center;
  padding-left: 40px;

  img {
    height: 50px;
    width: 50px;
  }

  h1 {
    font-size: 24px;
    margin-left: 10px;
  }
`;

export const UserInfo = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
`;
