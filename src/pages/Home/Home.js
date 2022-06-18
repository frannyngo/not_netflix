import React, { useEffect, useState } from "react";
import { search } from "../../helpers/functions";
import { Section, Button } from "../../global/Styles";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import { SearchContainer, Input, MovieLibrary } from "./HomeStyles";

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

  return (
    <Section flexDirection="column" style={{ paddingTop: 200 }}>
      {/* <SearchContainer onClick={(e) => searchMovie(e)}> */}
      <Input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search Movie"
        id="search"
      />
      {/* <Button>Search</Button> */}
      {/* </SearchContainer> */}
      <MovieLibrary>
        {movie &&
          movie.map((m) => {
            console.log(m);
            return <MovieContainer movie={m} />;
          })}
      </MovieLibrary>
    </Section>
  );
}
