import React from 'react';

import store from '../stores/MainStore';
import Canvas from './canvas/Canvas';
import Toolbar from './toolbar/Toolbar';
import { observer } from 'mobx-react';
import { Wrapper } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <Toolbar />
      <Canvas store={store} />
    </Wrapper>
  );
};

export default observer(App);
