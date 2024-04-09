import React from 'react';
import CardCharacter from '../CardCharacter';
import { SGridCharacters } from './styles';

export default function CharacterList({ characters }) {
  return (
    <SGridCharacters data-aos="fade-up" data-aos-delay="200">
      {characters
        && characters.map((charact) => (
          <CardCharacter key={charact.id} charact={charact} />
        ))}
    </SGridCharacters>
  );
}
