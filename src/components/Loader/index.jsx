import React from 'react';
import IconLoader from '../../assets/loader.gif';

import { LoaderApp } from './styles';

function Loader() {
  return (
    <LoaderApp>
      <img src={IconLoader} alt="Loader" />
    </LoaderApp>
  );
}

export default Loader;
