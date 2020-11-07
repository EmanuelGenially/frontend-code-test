import React from 'react';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';

const Box = ({ box }) => {
  return (
    <BoxDraggable box={box}>
      <div>Box</div>
    </BoxDraggable>
  );
};

export default observer(Box);
