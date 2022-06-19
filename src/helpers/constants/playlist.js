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
];

const COMEDY = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SX300.jpg",
    Title: "Neighbors 2: Sorority Rising",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzUyNDY1Mzk0NV5BMl5BanBnXkFtZTcwNDQwODg2Ng@@._V1_SX300.jpg",
    Title: "I Don't Know How She Does It",
    Year: "2011",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjA0MjU4OV5BMl5BanBnXkFtZTYwMzkyMTY3._V1_SX300.jpg",
    Title: "The Long Weekend",
    Year: "2005",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWFmNTI0ZWUtZDJmMC00MjFiLTk2YWItZWZlOTY4NmZhNzJlXkEyXkFqcGdeQXVyNDA1NDA2NTk@._V1_SX300.jpg",
    Title: "The Accidental Husband",
    Year: "2008",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI5MzQ0NjA5Ml5BMl5BanBnXkFtZTgwNjA1MTg1NzM@._V1_SX300.jpg",
    Title: "Someone Great",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTgyNjIzNTI4Ml5BMl5BanBnXkFtZTcwNzAzMjk0MQ@@._V1_SX300.jpg",
    Title: "Boys and Girls",
    Year: "2000",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGVlZjkyMGItMWJiMC00MzFkLWIyYTMtZTU3Yjg3OTM3M2QwXkEyXkFqcGdeQXVyODQ2ODY5MQ@@._V1_SX300.jpg",
    Title: "A Nice Girl Like You",
    Year: "2020",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczMTA5ODMxOV5BMl5BanBnXkFtZTgwNTgwNDkzNTM@._V1_SX300.jpg",
    Title: "Ibiza",
    Year: "2018",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Happy Gilmore",
    Year: "2018",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4MzMzMTY0OF5BMl5BanBnXkFtZTYwNzM3MTg2._V1_SX300.jpg",
    Title: "Scooby-Doo",
    Year: "2022",
  },
];

const FAMILIAR = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc1OTQzNzE0Nl5BMl5BanBnXkFtZTcwNDU4NDk3Mw@@._V1_SX300.jpg",
    Title: "Life as We Know It",
    Year: "2010",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzcwMzgyM2MtYmQ1YS00OWZlLWJmNGQtZTVjYzc3YTg0ZWFkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
    Title: "Passenger",
    Year: "2009",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg",
    Title: "Twilight",
    Year: "2008",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    Title: "The Amazing Spider-Man",
    Year: "2012",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_SX300.jpg",
    Title: "The Twilight Saga: New Moon",
    Year: "2009",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM5ZTNiNGMtMDA2OC00MDYyLWEyNzAtOWZmMzFlY2VmOWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Hustlers",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Title: "The Fast and the Furious",
    Year: "2001",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4MzMzMTY0OF5BMl5BanBnXkFtZTYwNzM3MTg2._V1_SX300.jpg",
    Title: "Scooby-Doo",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczMTA5ODMxOV5BMl5BanBnXkFtZTgwNTgwNDkzNTM@._V1_SX300.jpg",
    Title: "Ibiza",
    Year: "2018",
  },
];

const FUTURE = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg",
    Title: "The 5th Wave",
    Year: "2016",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
    Title: "The Hunger Games",
    Year: "2012",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Title: "I Am Legend",
    Year: "2007",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    Title: "The Amazing Spider-Man",
    Year: "2012",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_SX300.jpg",
    Title: "The Twilight Saga: New Moon",
    Year: "2009",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM5ZTNiNGMtMDA2OC00MDYyLWEyNzAtOWZmMzFlY2VmOWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Hustlers",
    Year: "2019",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Title: "The Fast and the Furious",
    Year: "2001",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4MzMzMTY0OF5BMl5BanBnXkFtZTYwNzM3MTg2._V1_SX300.jpg",
    Title: "Scooby-Doo",
    Year: "2022",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczMTA5ODMxOV5BMl5BanBnXkFtZTgwNTgwNDkzNTM@._V1_SX300.jpg",
    Title: "Ibiza",
    Year: "2018",
  },
];

const WATCH_AGAIN = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
    Title: "Harry Potter and the Sorcerer's Stone",
    Year: "2001",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
    Title: "Harry Potter and the Chamber of Secrets",
    Year: "2002",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    Title: "Harry Potter and the Prisoner of Azkaban",
    Year: "2004",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    Title: "Harry Potter and the Goblet of Fire",
    Year: "2005",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
    Title: "Harry Potter and the Order of the Phoenix",
    Year: "2007",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
    Title: "Harry Potter and the Deathly Hallows: Part 1",
    Year: "2010",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    Title: "Harry Potter and the Half-Blood Prince",
    Year: "2009",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg",
    Title: "When Harry Met Sally...",
    Year: "1989",
  },
];

export { TRENDING, POPULAR, COMEDY, FAMILIAR, FUTURE, WATCH_AGAIN };
