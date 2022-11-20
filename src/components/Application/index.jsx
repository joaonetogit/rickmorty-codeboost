import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardCharacter } from '../CardCharacter';
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from './styles';
import IconLoader from '../../assets/loader.gif';
export function Application() {
  const [numberCharacters, setNumberCharacters] = useState('');
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState('');
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setNumberCharacters(response.data.info.count);
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
        setIsLoader(false);
      });
  }, [page]);

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty</h1>
          <span>N de personagens: {numberCharacters}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ image, name, species, gender }, index) => {
                return (
                  <CardCharacter
                    key={index}
                    image={image}
                    name={name}
                    genre={gender}
                    specie={species}
                  />
                );
              })}
          </div>
          {!(page == countPages) && (
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Carregar mais
            </button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
}
