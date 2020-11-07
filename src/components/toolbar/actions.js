import { removeBoxes } from '../../domain/items/box/use-cases/removeBoxes';
import { createBox } from '../../domain/items/box/use-cases/createBox';

const onHandlerClickAddBox = () => {
  createBox();
};

const onHandlerClickRemoveBoxes = () => {
  removeBoxes();
};

export { onHandlerClickAddBox, onHandlerClickRemoveBoxes };
