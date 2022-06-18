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
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;

  &:focus {
    outline: none !important;
    border: 1px solid red;
  }
`;

export const MovieLibrary = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
`;
