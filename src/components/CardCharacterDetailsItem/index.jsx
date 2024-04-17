import React from 'react';
import { SCardDetailsItem, SCardDetailsItemTitle, SCardDetailsItemValue } from './styles';

export default function CardCharacterDetailsItem({ title, value }) {
  return (
    <SCardDetailsItem>
      <SCardDetailsItemTitle>{title}</SCardDetailsItemTitle>
      <SCardDetailsItemValue>{value}</SCardDetailsItemValue>
    </SCardDetailsItem>
  );
}
