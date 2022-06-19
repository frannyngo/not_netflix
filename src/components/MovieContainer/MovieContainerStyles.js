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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  &:hover {
    animation: ${hover} 0.1s ease-in;
    animation-fill-mode: forwards;
  }
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
  color: white;
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  width: 70%;
  text-align: center;
`;

export const Poster = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
`;
