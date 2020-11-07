import React from 'react';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';

const Box = ({ id, color, width, height, left, top }) => {
  return (
    <BoxDraggable
      id={id}
      color={color}
      width={width}
      height={height}
      left={left}
      top={top}
    >
      <div>Box</div>
    </BoxDraggable>
  );
};

export default observer(Box);
