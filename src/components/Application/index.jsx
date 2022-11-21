import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardCharacter } from '../CardCharacter';
import {
  Background,
  ContainerApp,
  ContentCharacters,
  HeaderApp,
  Loader,
} from './styles';
import IconLoader from '../../assets/loader.gif';
import Logo from '../../assets/logo.png';
export function Application() {
  const [numberCharacters, setNumberCharacters] = useState('');
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState('');
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setNumberCharacters(response.data.info.count);
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
      });
  }, [page]);

  return (
    <>
      <Background />
      {isLoader && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <figure className="logo" data-aos="fade-right" data-aos-delay="1000">
            <img src={Logo} alt="" />
          </figure>
          <span data-aos="fade-left" data-aos-delay="1000">
            Número de personagens: {numberCharacters}
          </span>
        </HeaderApp>
        <ContentCharacters>
          <div data-aos="fade-up" data-aos-delay="1000">
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
