import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/constants.js";

async function search(movieTitle) {
  if (typeof movieTitle !== "string") throw "Not a string";
  try {
    const response = await axios
      .post(`${BASE_URL}/?apikey=${API_KEY}&s=${movieTitle}&type=movie`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
    return response;
  } catch (error) {
    throw error;
  }
}

export { search };
