import React from "react";
import {
  Container,
  Header,
  TextContainer,
  Poster,
} from "./MovieContainerStyles";
import { Button } from "../../global/theme";
import Error from "../../assets/error.png";

export default function MovieContainer({ movie }) {
  return (
    <Container>
      <Poster
        src={movie.Poster}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = Error;
        }}
      />
      <TextContainer>
        <Header>{movie.Year}</Header>
        <Header>{movie.Title}</Header>
        <Button>More Info</Button>
      </TextContainer>
    </Container>
  );
}
