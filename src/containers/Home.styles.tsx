import styled from "styled-components";

export const Background = styled.div`
  background: rgb(207, 159, 26);
  background: linear-gradient(
    90deg,
    rgba(207, 159, 26, 1) 0%,
    rgba(177, 47, 146, 1) 73%
  );
  width: 100%;
  height: 100vh;
`;

export const HomeTitle = styled.h2`
  color: #fff;
  margin: 0;
  padding: 20px;
  font-size: 42px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: fit-content;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  transition: 0.3s;
  :hover {
    color: #fff;
    background-color: #c447d4;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
    transition: 0.3s;
    cursor: pointer;
  }
`;
