import React from 'react';
import useApp from '../../hooks/useApp';
import Button from '../Button';
import { SNavigation } from './styles';

export default function Navigation({ prevAction, nextAction }) {
  const { page, countPages } = useApp();

  return (
    <SNavigation>
      <Button disabled={page === 1} onClick={prevAction} label="Previous" />
      <Button
        disabled={page === countPages}
        onClick={nextAction}
        label="Next"
      />
    </SNavigation>
  );
}
