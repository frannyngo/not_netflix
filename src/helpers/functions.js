import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/constants.js";

async function search(movieTitle) {
  if (typeof movieTitle !== "string") throw "Not a string";
  const response = await axios
    .post(`${BASE_URL}/?apikey=${API_KEY}&s=${movieTitle}&type=movie`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.status;
    });
  return response;
}

export { search };
