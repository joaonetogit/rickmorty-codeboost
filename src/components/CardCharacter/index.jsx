import CardCharacterListDetails from '../CardCharacterListDetails';
import CardCharacterStatus from '../CardCharacterStatus';
import {
  SCardContainer,
  SCardImage,
  SCardImageContaniner,
  SCardInfo,
  SCardName,
  SCardWrapperName,
} from './styles';

export default function CardCharacter({ charact }) {
  return (
    <SCardContainer>
      <SCardImageContaniner>
        <SCardImage src={charact.image} alt={`${charact.name}`} />
      </SCardImageContaniner>
      <SCardInfo>
        <SCardWrapperName>
          <SCardName>{charact.name}</SCardName>
          <CardCharacterStatus status={charact.status} />
        </SCardWrapperName>
        <CardCharacterListDetails charact={charact} />
      </SCardInfo>
    </SCardContainer>
  );
}
