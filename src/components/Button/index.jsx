import React from 'react';
import { SButton } from './styles';

export default function Button({ onClick, label, disabled }) {
  return (
    <SButton disabled={disabled} onClick={onClick}>
      {label}
    </SButton>
  );
}
