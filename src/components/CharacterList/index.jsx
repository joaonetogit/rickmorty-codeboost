import React from 'react';
import CardCharacter from '../CardCharacter';
import { SGridCharacters } from './styles';

export default function CharacterList({ characters }) {
  return (
    <SGridCharacters>
      {characters
        && characters.map((charact) => (
          <CardCharacter key={charact.id} charact={charact} />
        ))}
    </SGridCharacters>
  );
}
