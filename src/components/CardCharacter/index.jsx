import {
  SCardContainer,
  SCardDetails,
  SCardDetailsItem,
  SCardImage,
  SCardImageContaniner,
  SCardInfo,
  SCardName,
} from './styles';

export default function CardCharacter({ charact }) {
  return (
    <SCardContainer>
      <SCardImageContaniner>
        <SCardImage src={charact.image} alt={`${charact.name}`} />
      </SCardImageContaniner>
      <SCardInfo>
        <SCardName>{charact.name}</SCardName>
        <SCardDetails>
          <SCardDetailsItem>
            Genre:
            {` ${charact.gender}`}
          </SCardDetailsItem>
          <SCardDetailsItem>
            Specie:
            {` ${charact.species}`}
          </SCardDetailsItem>
        </SCardDetails>
      </SCardInfo>
    </SCardContainer>
  );
}
