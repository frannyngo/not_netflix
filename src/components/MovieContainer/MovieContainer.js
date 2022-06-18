import React from "react";
import {
  Container,
  Header,
  TextContainer,
  Poster,
} from "./MovieContainerStyles";
import { Button } from "../../global/Styles";
import Error from "../../assets/error.png";

export default function MovieContainer(props) {
  return (
    <Container>
      <Poster
        src={props.movie.Poster}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = Error;
        }}
      />
      <TextContainer>
        <Header>{props.movie.Year}</Header>
        <Header>{props.movie.Title}</Header>
        <Button>More Info</Button>
      </TextContainer>
    </Container>
  );
}
