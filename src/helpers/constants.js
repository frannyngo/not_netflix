const API_KEY = "d871186e";
const BASE_URL = "http://www.omdbapi.com";
const MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d871186e";

const TRENDING = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTNkNjU4OGYtODM3NS00NzM1LWFkZWItZTExNzdjYTAwMmRlXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg",
    Title: "Watcher",
    Year: "202",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDgwNGFmMDMtNGQzMC00Mjc2LWFhNzItYWIxMGJlM2Q2MzZlXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg",
    Title: "The Innocents",
    Year: "2021",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDdjODNkMmYtYjMwNS00NTQzLThlYjUtODY2ZjdjNTNlY2JiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Crimes of the Future",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg",
    Title: "Jurassic World: Fallen Kingdom",
    Year: "2018",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzg0ZDkwZDItMzVkZC00YjI2LTk5OTAtMmE4YTZjMWU3YzllXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    Title: "Emergency",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
    Title: "The Unbearable Weight of Massive Talent",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Title: "The Lost City",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjljZGI5ZTAtMmIwMC00N2ZiLWEzNmYtMDQ1MzFiNDI4ZDllXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg",
    Title: "Mad God",
    Year: "2021",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    Title: "The Batman",
    Year: "2018",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTMyNzQ4MmUtMmJiYy00YjlmLWJiMzktNjc1MGNlMzBjYjhiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    Title: "The Card Counter",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    Title: "Jurassic Park",
    Year: "1993",
  },
];

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
      "https://m.media-amazon.com/images/M/MV5BZmQ1NDZjMTktMjFhZC00ZGY5LWEyMTMtNDhkOWM4NmMyZjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Jurassic World Dominion",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg",
    Title: "Jurassic World: Fallen Kingdom",
    Year: "2018",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
    Title: "The Northman",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGNjYjQ3NjgtZWM0NS00MTY5LTlkZWMtODZlNzhkNTU3MzZiXkEyXkFqcGdeQXVyMjM2OTI3Mzk@._V1_SX300.jpg",
    Title: "Interceptor",
    Year: "2022",
  },
];

export { API_KEY, BASE_URL, MOVIE_URL, POPULAR, TRENDING };
