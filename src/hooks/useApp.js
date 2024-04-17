import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchCharacters from '../services/fetchCharacters';
import scrollToTop from '../utils/scrollTop';

export default function useApp() {
  const [page, setPage] = useSearchParams({ page: 1 });
  const pageNow = parseInt(page.get('page'), 10);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters', pageNow],
    queryFn: () => fetchCharacters(pageNow),
  });

  useEffect(() => {
    scrollToTop();
  }, [pageNow]);

  function goToFirstPage() {
    setPage((prev) => {
      prev.set('page', 1);
      return prev;
    });
  }

  function handleSetPage(mode) {
    setPage((prev) => {
      prev.set('page', mode === 'plus' ? pageNow + 1 : pageNow - 1);
      return prev;
    });
  }

  function disableHandlePagination() {
    return pageNow === 1 || pageNow === data?.info.pages;
  }

  function handlePrevPage() {
    disableHandlePagination();
    handleSetPage('minus');
  }

  function handleNextPage() {
    disableHandlePagination();
    handleSetPage('plus');
  }

  return {
    numberCharacters: data?.info.count || 0,
    characters: data?.results || [],
    countPages: data?.info.pages || 0,
    isLoading,
    isError,
    page: pageNow,
    goToFirstPage,
    handleNextPage,
    handlePrevPage,
  };
}
