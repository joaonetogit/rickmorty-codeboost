import {
  CardContainer,
  CardDetails,
  CardDetailsItem,
  CardImage,
  CardInfo,
  CardName,
} from './styles';

function CardCharacter({
  image, name, genre, specie,
}) {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt={`${name}`} />
      </CardImage>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardDetails>
          <CardDetailsItem>
            Genre:
            {` ${genre}`}
          </CardDetailsItem>
          <CardDetailsItem>
            Specie:
            {` ${specie}`}
          </CardDetailsItem>
        </CardDetails>
      </CardInfo>
    </CardContainer>
  );
}

export default CardCharacter;
