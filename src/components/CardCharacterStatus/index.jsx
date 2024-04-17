import React from 'react';
import { SCharacterStatus } from './styles';

export default function CardCharacterStatus({ status }) {
  return (
    <SCharacterStatus>
      {status === 'Alive' ? '- Alive -' : '- Dead -'}
    </SCharacterStatus>
  );
}
