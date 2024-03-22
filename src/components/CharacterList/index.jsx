import React from 'react';
import CardCharacter from '../CardCharacter';
import LoadMore from '../LoadMore';
import { ContentCharacters, GridCharacters } from './styles';

export default function CharacterList({
  characters, page, setPage, countPages,
}) {
  return (
    <ContentCharacters data-aos="fade-up" data-aos-delay="1000">
      <GridCharacters>
        {characters
          && characters.map(({
            id, image, name, species, gender,
          }) => (
            <CardCharacter
              key={id}
              image={image}
              name={name}
              genre={gender}
              specie={species}
            />
          ))}
      </GridCharacters>
      {!(page === countPages) && <LoadMore page={page} setPage={setPage} />}
    </ContentCharacters>
  );
}
