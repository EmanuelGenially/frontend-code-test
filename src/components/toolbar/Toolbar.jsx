import { observer } from 'mobx-react';
import React from 'react';
import store from '../../stores/MainStore';
import {
  onHandlerClickAddBox,
  onHandlerClickRemoveBoxes,
  onHandlerBlurColor,
} from './actions';
import { BoxesCount, Wrapper } from './Toolbar.styled';

const Toolbar = () => {
  const selectedCount = store.selectedBoxes.length;

  return (
    <Wrapper>
      <button onClick={onHandlerClickAddBox}>Add Box</button>
      <button onClick={onHandlerClickRemoveBoxes}>Remove Box</button>
      {selectedCount && (
        <input
          type="color"
          onBlur={onHandlerBlurColor}
          value={store.selectedBoxes[0].color}
        />
      )}
      <BoxesCount>
        {selectedCount
          ? `${selectedCount} boxes selected`
          : 'No boxes selected'}
      </BoxesCount>
    </Wrapper>
  );
};

export default observer(Toolbar);
