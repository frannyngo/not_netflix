import React from "react";
import { Title, Container, MoviesContainer, Poster } from "./PlaylistStyles";

export default function Playlist(props) {
  console.log(props.list);
  return (
    <Container>
      <Title>{props.title}</Title>
      <MoviesContainer>
        {props.list.map((movie, i) => {
          console.log(movie.Poster);
          return <Poster key={i} src={`${movie.Poster}`} />;
        })}
      </MoviesContainer>
    </Container>
  );
}
