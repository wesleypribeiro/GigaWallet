import styled from "styled-components";

const Content = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 5px 0;

  label input {
    height: 28px;
    margin-left: 10px;
  }

  label,
  select {
    margin-left: 10px;
  }

  select {
    height: 34px;
    padding: 5px;
  }

  #input-value {
    width: 65px;
  }

  button {
    margin-left: 10px;
    height: 39px;
    background-color: green;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: none;
    border: 1px solid black;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 0 15px;
  }

  button:hover {
    background-color: brown;
    transition: 0.5s;
  }

  @media (max-width: 380px) {
    display: block;

    label {
      display: flex;
      align-items: center;
      margin-left: 15px;
    }

    label span {
      width: 25%;
    }

    label input {
      width: 50%;
      margin: 10px;
    }

    label select {
      width: 50%;
      margin: 10px;
    }

    .center {
      display: flex;
      justify-content: center;
    }
  }
`;

export default Content;
