import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  color: red;
  width: 300px;
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
