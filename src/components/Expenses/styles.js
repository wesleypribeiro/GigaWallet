import styled from "styled-components";

const Content = styled.main`
  display: flex;
  justify-content: center;
  background-color: rgb(51, 47, 47);
  color: white;

  table {
    border-collapse: collapse;
    width: 100%;
    background-color: rgb(51, 47, 47);
  }

  table thead {
    padding: 20px;
  }

  tbody {
    text-align: center;
    width: 100%;
    color: black;
    background-color: white;
  }
  
  button {
    height: 34px;
    width: 36px;
    margin: 5px;
    padding: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  img {
    height: 18px;
  }

  button:hover {
    opacity: 0.7;
    transition: 0.5s;
  }
`;

export default Content;
