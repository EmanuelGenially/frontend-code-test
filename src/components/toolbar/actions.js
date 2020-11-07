import { removeBoxes } from '../../domain/items/box/use-cases/removeBoxes';
import { createBox } from '../../domain/items/box/use-cases/createBox';
import { changeColorBoxes } from '../../domain/items/box/use-cases/changeColorBoxes';

const onHandlerClickAddBox = () => {
  createBox();
};

const onHandlerClickRemoveBoxes = () => {
  removeBoxes();
};

const onHandlerBlurColor = (e) => {
  changeColorBoxes(e.target.value);
};

export { onHandlerClickAddBox, onHandlerClickRemoveBoxes, onHandlerBlurColor };
