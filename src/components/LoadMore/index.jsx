import React from 'react';
import { LoadMoreApp } from './styles';

function LoadMore() {
  return (
    <LoadMoreApp
      type="button"
      onClick={() => alert('Carregar mais')}
    >
      Carregar mais
    </LoadMoreApp>
  );
}

export default LoadMore;
