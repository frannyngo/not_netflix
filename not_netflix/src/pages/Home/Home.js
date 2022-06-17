import React, { useEffect, useState } from "react";
import { search } from "../../helpers/functions";
import { Section, Button } from "../../global/Styles";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import { SearchContainer, Input } from "./HomeStyles";

export default function Home() {
  const [movie, setMovie] = useState();

  async function searchMovie(e) {
    e.preventDefault();
    const response = await search(e.target.search.value);
    console.log(response.Search);
    setMovie(response.Search);
  }

  console.log(movie);

  return (
    <Section flexDirection="column">
      <SearchContainer onSubmit={(e) => searchMovie(e)}>
        <Input type="text" placeholder="Search Movie" id="search" />
        <Button>Search</Button>
      </SearchContainer>
      {movie &&
        movie.map((m) => {
          console.log(m);
          return <MovieContainer movie={m} />;
        })}
    </Section>
  );
}
