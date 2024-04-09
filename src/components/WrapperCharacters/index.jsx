import React from 'react';
import { SWrapperCharacters } from './styles';

export default function WrapperCharacters({ children }) {
  return (
    <SWrapperCharacters>
      {children}
    </SWrapperCharacters>
  );
}
