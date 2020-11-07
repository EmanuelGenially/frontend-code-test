import React from 'react';
import { BoxesCount, Wrapper } from './Toolbar.styled';

const Toolbar = () => {
  return (
    <Wrapper>
      <button>Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <BoxesCount>No boxes selected</BoxesCount>
    </Wrapper>
  );
};

export default Toolbar;
