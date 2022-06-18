const API_KEY = "d871186e";
const BASE_URL = "http://www.omdbapi.com";
const MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d871186e";

const POPULAR = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg",
    Title: "Pokémon Detective Pikachu",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_SX300.jpg",
    Title: "Fantastic Beasts: The Secrets of Dumbledore",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjdhYTE3NjMtZjI3OC00NzVlLWFiNTUtNzQ3NDNiNTI3NDg4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Hustle",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
    Title: "Doctor Strange in the Multiverse of Madness",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Morbius",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Top Gun: Maverick",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Title: "Deep Water",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg",
    Title: "Pokémon Detective Pikachu",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_SX300.jpg",
    Title: "Fantastic Beasts: The Secrets of Dumbledore",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjdhYTE3NjMtZjI3OC00NzVlLWFiNTUtNzQ3NDNiNTI3NDg4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Hustle",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
    Title: "Doctor Strange in the Multiverse of Madness",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Morbius",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Top Gun: Maverick",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Title: "Deep Water",
    Year: "2022",
  },
];

export { API_KEY, BASE_URL, MOVIE_URL, POPULAR };
