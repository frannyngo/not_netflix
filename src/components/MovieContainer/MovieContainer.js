import React from "react";
import {
  Container,
  Header,
  TextContainer,
  Poster,
} from "./MovieContainerStyles";
import { Button } from "../../global/Styles";

export default function MovieContainer(data) {
  return (
    <Container>
      <Poster src={data.movie.Poster} />
      <TextContainer>
        <Header>{data.movie.Year}</Header>
        <Header>{data.movie.Title}</Header>
        <Button>More Info</Button>
      </TextContainer>
    </Container>
  );
}
