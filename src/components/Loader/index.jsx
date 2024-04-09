import React from 'react';
import IconLoader from '../../assets/loader.gif';

import { SLoader } from './styles';

export default function Loader() {
  return (
    <SLoader>
      <img src={IconLoader} alt="Loader" />
    </SLoader>
  );
}
