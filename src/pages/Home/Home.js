import React, { useEffect, useState } from "react";
import { search } from "../../helpers/functions";
import { Section } from "../../global/theme";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import {
  ButtonContainer,
  DeleteButton,
  Input,
  SearchLibrary,
} from "./HomeStyles";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistContainer } from "../../components/Playlist/PlaylistStyles";
import {
  TRENDING,
  POPULAR,
  COMEDY,
  FAMILIAR,
  FUTURE,
} from "../../helpers/constants/playlist";

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

  console.log(movie);

  return (
    <Section flexDirection="column">
      <ButtonContainer>
        <Input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search Movie"
          id="search"
        />
        <DeleteButton onClick={(e) => clearSearch(e)}>X</DeleteButton>
      </ButtonContainer>
      {movie && (
        <SearchLibrary>
          {movie &&
            movie.map((m, i) => {
              return <MovieContainer key={i} movie={m} />;
            })}
        </SearchLibrary>
      )}
      <PlaylistContainer>
        <Playlist title={`Popular on Not Netflix`} list={POPULAR} />
        <Playlist title={`Trending Now`} list={TRENDING} />
        <Playlist title={`90-Minute Comedies`} list={COMEDY} />
        <Playlist title={`Familiar Favourites`} list={FAMILIAR} />
        <Playlist title={`Dystopian Futures`} list={FUTURE} />
        {/* /////// */}
        <Playlist title={`Popular on Not Netflix`} list={POPULAR} />
        <Playlist title={`Trending Now`} list={TRENDING} />
        <Playlist title={`90-Minute Comedies`} list={COMEDY} />
        <Playlist title={`Familiar Favourites`} list={FAMILIAR} />
        <Playlist title={`Dystopian Futures`} list={FUTURE} />
        <Playlist title={`90-Minute Comedies`} list={COMEDY} />
      </PlaylistContainer>
      -
    </Section>
  );
}
