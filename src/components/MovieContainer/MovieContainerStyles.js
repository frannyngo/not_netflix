import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  height: 350px;
  margin: 20px;
  padding-top: 5px;
  padding-top: 10px;
  border: 1px solid red;
`;

export const TextContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
`;

export const Header = styled.p`
  color: red;
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  width: 70%;
  text-align: center;
`;

export const Poster = styled.img`
  width: 95%;
  height: 60%;
  border-radius: 10px;
`;
