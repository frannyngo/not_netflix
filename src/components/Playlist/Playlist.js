import React from "react";
import { Title, Container, MoviesContainer, Poster } from "./PlaylistStyles";

export default function Playlist(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <MoviesContainer>
        {props.list.map((movie, i) => {
          return <Poster key={i} src={`${movie.Poster}`} />;
        })}
      </MoviesContainer>
    </Container>
  );
}
