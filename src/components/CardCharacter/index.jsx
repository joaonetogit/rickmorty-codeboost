import { ContainerCard } from './styles';

export function CardCharacter({ image, name, genre, specie }) {
  return (
    <ContainerCard>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>
        <ul className="details">
          <li>Genre: {genre}</li>
          <li>Specie: {specie}</li>
        </ul>
      </div>
    </ContainerCard>
  );
}
