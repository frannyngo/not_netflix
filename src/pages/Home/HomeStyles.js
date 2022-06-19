import styled, { keyframes } from "styled-components";

const hover = keyframes`
  from {
    transform: scale(1);
    --webkit-transform: scale(1);
    -ms-transform: scale(1);  
  }
  to {
    transform: scale(1.1);
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }
`;

const hoverOver = keyframes`
  from {
    transform: scale(1.1);
    --webkit-transform: scale(1);
    -ms-transform: scale(1);  
  }
  to {
    transform: scale(1);
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
`;

export const SearchPlacerholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 90%;
`;

export const Input = styled.input`
  color: red;
  width: 200px;
  height: 25px;
  border: 1px solid red;
  background: transparent;
  padding: 10px;
  border-radius: 10px;

  &:focus {
    outline: none !important;
    border: 1px solid red;
  }
`;

export const SearchLibrary = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  gap: 20px;
  height: 240px;
  width: 100%;
  animation: ${hoverOver} 0.1s ease-in;
  animation-fill-mode: forwards;

  &:hover {
    animation: ${hover} 0.1s ease-in;
    animation-fill-mode: forwards;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: red;
  border-radius: 10px;
  padding: 13.5px;
  border: 1px solid red;
  width: 50px;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
    background: red;
    color: black;
  }
`;
