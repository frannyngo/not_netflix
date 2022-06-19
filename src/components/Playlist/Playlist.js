import React from "react";
import {
  Title,
  Container,
  MoviesContainer,
  Poster,
  InfoContainer,
  Movie,
} from "./PlaylistStyles";
import Error from "../../assets/error.png";
import { Header } from "../MovieContainer/MovieContainerStyles";
import { Button } from "../../global/theme";

export default function Playlist({ title, list }) {
  return (
    <Container>
      <Title>{title}</Title>
      <MoviesContainer>
        {list.map((movie, i) => {
          return (
            <Movie>
              <InfoContainer>
                <Header>{movie.Year}</Header>
                <Header>{movie.Title}</Header>
                <Button>More Info</Button>
              </InfoContainer>
              <Poster
                key={i}
                src={`${movie.Poster}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = Error;
                }}
              />
            </Movie>
          );
        })}
      </MoviesContainer>
    </Container>
  );
}
