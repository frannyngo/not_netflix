import styled from "styled-components";

export const Theme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: black;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "column"};
  padding-top: 200px;
  padding-bottom: 100px;
  background: ${(props) => props.background || "black"};
  width: 90%;
  max-width: 1600px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid;
  width: 100px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    background: red;
    color: black;
  }
`;
