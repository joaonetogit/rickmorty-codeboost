import axios from 'axios';

async function fetchCharacters(page) {
  const URL_BASE = import.meta.env.VITE_URL_API;
  const response = await axios.get(`${URL_BASE}?page=${page}`);
  return response.data;
}

export default fetchCharacters;
