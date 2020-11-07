import React from 'react';

import { observer } from 'mobx-react';
import Box from '../box/Box';
import { Wrapper } from './Canvas.styled';

function Canvas({ store }) {
  return (
    <Wrapper>
      {store.boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          box={box}
        />
      ))}
    </Wrapper>
  );
}

export default observer(Canvas);
