import {
  CardContainer,
  CardDetails,
  CardDetailsItem,
  CardDetailsItemText,
  CardDetailsItemTextValue,
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
            <CardDetailsItemText>Genre:</CardDetailsItemText>
            <CardDetailsItemTextValue>{genre}</CardDetailsItemTextValue>
          </CardDetailsItem>
          <CardDetailsItem>
            <CardDetailsItemText>Specie:</CardDetailsItemText>
            <CardDetailsItemTextValue>{specie}</CardDetailsItemTextValue>
          </CardDetailsItem>
        </CardDetails>
      </CardInfo>
    </CardContainer>
  );
}

export default CardCharacter;
