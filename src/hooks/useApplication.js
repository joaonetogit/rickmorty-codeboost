import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useApplication = () => {
  const URL_BASE = 'https://rickandmortyapi.com/api/character';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters', URL_BASE],
    queryFn: async () => {
      const response = await axios.get(`${URL_BASE}`);
      return response.data;
    },
  });

  return {
    numberCharacters: data?.info.count || null,
    characters: data?.results || [],
    page: data?.info.page || 1,
    countPages: data?.info.pages || null,
    isLoader: isLoading,
    isError,
  };
};

export default useApplication;
