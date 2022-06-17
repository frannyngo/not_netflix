import React from "react";
import { Container } from "./MovieContainerStyles";
import { Button } from "../../global/Styles";

export default function MovieContainer(data) {
  return (
    <Container>
      <p>{data.movie.Poster}</p>
      <p>{data.movie.Title}</p>
      <p>{data.movie.Year}</p>
      <Button>More Info</Button>
    </Container>
  );
}
