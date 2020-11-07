import React from 'react';

import { observer } from 'mobx-react';
import Box from '../box/Box';
import { Wrapper } from './Canvas.styled';

const Canvas = ({ store }) => {
  return (
    <Wrapper>
      {store.boxes.map((box, index) => (
        <Box key={box.id} box={box} />
      ))}
    </Wrapper>
  );
};

export default observer(Canvas);
