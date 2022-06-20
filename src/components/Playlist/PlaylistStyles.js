import styled, { keyframes } from "styled-components";

const hover = keyframes`
  from {
    transform: scale(1);
    --webkit-transform: scale(1);
    -ms-transform: scale(1);  
    opacity: 0;
  }
  to {
    transform: scale(1.1);
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    opacity: 1;
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0px, 0);
  }
  to {
    opacity: ;
    transform: translate3d(0px, 0px, 0);
  }
`;

export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  animation: ${fade} 1s ease-in;
`;

export const Title = styled.h1`
  color: white;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  gap: 10px;
  overflow-y: hidden;
`;

export const Poster = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  z-index: 0;
  top: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 200px;
  width: 250px;
  z-index: 0;
  background: black;
  opacity: 0;
  &:hover {
    animation: ${hover} 0.1s ease-in;
    animation-fill-mode: forwards;
  }
`;

export const Movie = styled.div`
  position: relative;
  height: 200px;
  width: 250px;
`;
