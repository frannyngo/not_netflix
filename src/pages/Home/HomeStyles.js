import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
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
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
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
