import store from '../../../../stores/MainStore';

const changeColorBoxes = (color) => {
  store.selectedBoxes.forEach((selectedBox) => selectedBox.setColor(color));
};

export { changeColorBoxes };
