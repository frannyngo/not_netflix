import styled from "styled-components";

export const Theme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: black;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding-top: 100px;
  padding-bottom: 100px;
  background: ${(props) => props.background || "black"};
  width: 100%;
  max-width: 2000px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: red;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid red;
  width: 100px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }
`;
