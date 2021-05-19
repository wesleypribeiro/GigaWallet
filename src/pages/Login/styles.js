import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Background});
  background-size: cover;
`;

export const Title = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 3%;
  padding: 2% 5% 3% 5%;
  background-color: white;

  img {
    height: 133px;
    width: 172px;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 42px;
  }

  input {
    padding: 10px;
  }

  button {
    margin-top: 5%;
    height: 39px;
    background-color: brown;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: none;
    border: 1px solid black;
    text-align: center;
  }

  button:enabled {
    background-color: green;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  button:enabled:hover {
    opacity: 0.7;
    transition: 0.6s;
  }
`;

export const LogoSection = styled.section`
  margin-bottom: 5%;
`;

export const FormLogin = styled.section`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
`;
