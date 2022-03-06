import styled from "styled-components";

export const Background = styled.div`
  background: rgb(56, 220, 222);
  background: linear-gradient(
    90deg,
    rgba(56, 220, 222, 1) 0%,
    rgba(17, 146, 204, 1) 100%
  );
  width: 100%;
  height: 100vh;
`;

export const HomeTitle = styled.h2`
  color: #fff;
  margin: 0;
  padding: 40px;
  font-size: 56px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: fit-content;
`;

export const ButtonContainer = styled.div`
  padding: 40px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  transition: 0.3s;
  color: #c447d4;
  :hover {
    color: #fff;
    background-color: #c447d4;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Text = styled.div`
  font-weight: bold;
  flex-grow: 2;
  margin-left: 250px;
`;

export const Power = styled.p`
  font-size: 150px;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

export const PairedDevice = styled.p`
  .green {
    color: #008a00;
  }
  .red {
    color: red;
  }
  font-weight: bold;
  margin: 0;
  flex-grow: 1;
`;
