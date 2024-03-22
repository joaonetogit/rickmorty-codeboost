import React from 'react';
import { LoadMoreApp } from './styles';

function LoadMore({ page, setPage }) {
  return (
    <LoadMoreApp
      type="button"
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Carregar mais
    </LoadMoreApp>
  );
}

export default LoadMore;
