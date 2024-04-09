import axios from 'axios';
import sleep from '../utils/sleep';

async function fetchCharacters(page) {
  const URL_BASE = import.meta.env.VITE_URL_API;
  await sleep();
  const response = await axios.get(`${URL_BASE}?page=${page}`);
  return response.data;
}

export default fetchCharacters;
