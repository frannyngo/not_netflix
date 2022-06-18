import React, { useEffect, useState } from "react";
import { search } from "../../helpers/functions";
import { Section, Button } from "../../global/Styles";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import {
  ButtonContainer,
  DeleteButton,
  Input,
  MovieLibrary,
} from "./HomeStyles";
import Playlist from "../../components/Playlist/Playlist";
import { POPULAR } from "../../helpers/constants";
import { PlaylistContainer } from "../../components/Playlist/PlaylistStyles";

export default function Home() {
  const [movie, setMovie] = useState();

  async function handleChange(e) {
    if (e.target.value.length < 3) {
      setMovie();
    } else {
      const response = await search(e.target.value);
      setMovie(response.Search);
    }
  }

  function clearSearch(e) {
    e.preventDefault();
    setMovie();
  }

  return (
    <Section flexDirection="column" style={{ paddingTop: 200 }}>
      <ButtonContainer>
        <Input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search Movie"
          id="search"
        />
        <DeleteButton onClick={(e) => clearSearch(e)}>X</DeleteButton>
      </ButtonContainer>

      {movie ? (
        <MovieLibrary>
          {movie &&
            movie.map((m, i) => {
              return <MovieContainer key={i} movie={m} />;
            })}
        </MovieLibrary>
      ) : (
        <PlaylistContainer>
          <Playlist title={`Popular on Not Netflix`} list={POPULAR} />
          <Playlist title={`Trending Now`} list={POPULAR} />
        </PlaylistContainer>
      )}
    </Section>
  );
}
