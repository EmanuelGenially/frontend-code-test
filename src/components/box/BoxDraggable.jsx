import React from 'react';
import { observer } from 'mobx-react';
import { Wrapper } from './BoxDraggable.styled';
import { onHandleClickBox } from './actions';

const BoxDraggable = ({ box, children }) => {
  const { id, color, width, height, left, top, selected } = box;
  console.log(selected);
  return (
    <Wrapper
      id={id}
      color={color}
      width={width}
      height={height}
      left={left}
      top={top}
      selected={selected}
      onClick={onHandleClickBox(box)}
    >
      {children}
    </Wrapper>
  );
};

export default observer(BoxDraggable);
