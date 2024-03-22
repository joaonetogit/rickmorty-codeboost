import axios from 'axios';
import { useEffect, useState } from 'react';

const useApplication = () => {
  const [numberCharacters, setNumberCharacters] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(null);
  const [isLoader, setIsLoader] = useState(true);

  const URL_BASE = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    axios
      .get(`${URL_BASE}?page=${page}`)
      .then((response) => {
        setIsLoader(true);
        setNumberCharacters(response.data.info.count);
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
      })
      .finally(() => setIsLoader(false));
  }, [page]);

  return {
    numberCharacters,
    characters,
    page,
    countPages,
    isLoader,
    setPage,
  };
};

export default useApplication;
