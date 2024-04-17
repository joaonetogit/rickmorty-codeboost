import React from 'react';
import formatTimeBorn from '../../utils/formatTimeBorn';
import CardCharacterDetailsItem from '../CardCharacterDetailsItem';
import { SCardDetails } from './styles';

export default function CardCharacterListDetails({ charact }) {
  const {
    gender, species, origin, location, episode, created,
  } = charact;

  const formattedCreated = formatTimeBorn(created);
  const numberEpisodes = episode.length;

  return (
    <SCardDetails>
      <CardCharacterDetailsItem title="Born:" value={formattedCreated} />
      <CardCharacterDetailsItem title="Genre:" value={gender} />
      <CardCharacterDetailsItem title="Specie:" value={species} />
      <CardCharacterDetailsItem title="Origin:" value={origin.name} />
      <CardCharacterDetailsItem title="Location:" value={location.name} />
      <CardCharacterDetailsItem title="Episodes:" value={numberEpisodes} />
    </SCardDetails>
  );
}
