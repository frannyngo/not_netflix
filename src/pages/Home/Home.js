import React, { useRef, useState } from "react";
import { search } from "../../helpers/functions";
import { Section } from "../../global/theme";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import {
  ButtonContainer,
  DeleteButton,
  Input,
  SearchLibrary,
  SearchPlacerholder,
} from "./HomeStyles";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistContainer } from "../../components/Playlist/PlaylistStyles";
import {
  TRENDING,
  POPULAR,
  COMEDY,
  FAMILIAR,
  FUTURE,
  WATCH_AGAIN,
} from "../../helpers/constants/playlist";

export default function Home() {
  const ref = useRef();
  const [movie, setMovie] = useState();
  const [message, setMessage] = useState("Welcome to Not Netflix.");

  async function handleChange(e) {
    try {
      if (e.target.value.length < 3 && e.target.value.length >= 1) {
        setMovie();
        setMessage("Search must contain at least 3 letters.");
      } else if (e.target.value.length == 0) {
        setMessage("Welcome to Not Netflix.");
      } else {
        const response = await search(e.target.value);
        response.Error && setMessage(response.Error);
        typeof response === "number"
          ? setMessage("Network error, please try again later.") // ran out of API calls
          : setMovie(response.Search);
      }
    } catch (eror) {
      setMessage("Something went wrong, Please try again later");
    }
  }

  function clearSearch(e) {
    e.preventDefault();
    setMovie();
    setMessage("Welcome to Not Netflix.");
    ref.current.value = "";
  }

  return (
    <Section flexDirection="column">
      <ButtonContainer>
        <Input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search Movie"
          id="search"
          ref={ref}
        />
        <DeleteButton onClick={(e) => clearSearch(e)}>X</DeleteButton>
      </ButtonContainer>
      {movie ? (
        <SearchLibrary>
          {movie.map((m, i) => {
            return <MovieContainer key={i} movie={m} />;
          })}
        </SearchLibrary>
      ) : (
        <SearchPlacerholder>
          <p style={{ color: "grey" }}>{message}</p>
        </SearchPlacerholder>
      )}
      <PlaylistContainer>
        <Playlist title={`Popular on Not Netflix`} list={POPULAR} />
        <Playlist title={`Trending Now`} list={TRENDING} />
        <Playlist title={`90-Minute Comedies`} list={COMEDY} />
        <Playlist title={`Familiar Favourites`} list={FAMILIAR} />
        <Playlist title={`Dystopian Futures`} list={FUTURE} />
        <Playlist title={`Watch It Again`} list={WATCH_AGAIN} />
        <Playlist title={`Awkward Comedy`} list={TRENDING} />
        <Playlist title={`Comedy`} list={COMEDY} />
        <Playlist title={`Because You Watched Twilight`} list={FAMILIAR} />
        <Playlist title={`Suspensful Movies`} list={FUTURE} />
        <Playlist title={`Thrillers`} list={WATCH_AGAIN} />
      </PlaylistContainer>
      -
    </Section>
  );
}
