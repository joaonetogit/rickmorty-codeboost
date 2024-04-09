import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import fetchCharacters from '../services/fetchCharacters';

export default function useApp() {
  const [page, setPage] = useSearchParams({ page: 1 });
  const pageNow = parseInt(page.get('page'), 10);

  const {
    data, isLoading, isFetching, isError,
  } = useQuery({
    queryKey: ['characters', pageNow],
    queryFn: () => fetchCharacters(pageNow),
  });

  function goToFirstPage() {
    setPage((prev) => {
      prev.set('page', 1);
      return prev;
    });
  }

  function handlePrevPage() {
    if (pageNow === 1) return;
    setPage((prev) => {
      prev.set('page', pageNow - 1);
      return prev;
    });
  }

  function handleNextPage() {
    if (pageNow === data?.info.pages) return;
    setPage((prev) => {
      prev.set('page', pageNow + 1);
      return prev;
    });
  }

  return {
    numberCharacters: data?.info.count || 0,
    characters: data?.results || [],
    countPages: data?.info.pages || 0,
    isFetching,
    isLoading,
    isError,
    page: pageNow,
    goToFirstPage,
    handleNextPage,
    handlePrevPage,
  };
}
