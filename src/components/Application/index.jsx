import { ContainerApp } from './styles';

import useApplication from '../../hooks/useApplication';
import Background from '../Background';
import CharacterList from '../CharacterList';
import Header from '../Header';
import Loader from '../Loader';

function Application() {
  const {
    numberCharacters, characters, page, countPages, isLoader, setPage,
  } = useApplication();

  if (isLoader) {
    return <Loader />;
  }

  return (
    <>
      <Background />
      <ContainerApp>
        <Header numberCharacters={numberCharacters} />
        <CharacterList
          characters={characters}
          page={page}
          setPage={setPage}
          countPages={countPages}
        />
      </ContainerApp>
    </>
  );
}

export default Application;
