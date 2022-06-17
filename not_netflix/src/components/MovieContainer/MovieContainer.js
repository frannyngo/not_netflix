import React from "react";
import { Section } from "../../global/Styles";
import { Container } from "./MovieContainerStyles";

export default function MovieContainer(data) {
  return (
    <Container>
      <p>{data.movie.poster}</p>
      <p>{data.movie.title}</p>
      <p>{data.movie.year}</p>
    </Container>
  );
}
