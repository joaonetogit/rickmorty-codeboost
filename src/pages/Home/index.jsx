import React from 'react';
import CharacterList from '../../components/CharacterList';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Navigation from '../../components/Navigation';
import WrapperCharacters from '../../components/WrapperCharacters';
import useApp from '../../hooks/useApp';
import { ContainerApp, MainApp } from './styles';

export default function Home() {
  const {
    goToFirstPage,
    isFetching,
    isLoading,
    numberCharacters,
    characters,
    handleNextPage,
    handlePrevPage,
  } = useApp();

  return (
    <MainApp>
      <ContainerApp>
        <Header
          numberCharacters={numberCharacters}
          onClickLogo={goToFirstPage}
        />
        <WrapperCharacters>
          {isFetching || isLoading ? (
            <Loader />
          ) : (
            <CharacterList characters={characters} />
          )}
          <Navigation nextAction={handleNextPage} prevAction={handlePrevPage} />
        </WrapperCharacters>
      </ContainerApp>
    </MainApp>
  );
}
