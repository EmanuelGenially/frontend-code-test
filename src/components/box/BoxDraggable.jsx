import React from 'react';
import { observer } from 'mobx-react';
import { Wrapper } from './BoxDraggable.styled';

const BoxDraggable = ({ id, color, width, height, left, top, children }) => {
  return (
    <Wrapper
      id={id}
      color={color}
      width={width}
      height={height}
      left={left}
      top={top}
    >
      {children}
    </Wrapper>
  );
};

export default observer(BoxDraggable);
