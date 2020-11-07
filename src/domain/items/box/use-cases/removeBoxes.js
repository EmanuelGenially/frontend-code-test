import store from '../../../../stores/MainStore';

const removeBoxes = () => {
  store.selectedBoxes.forEach((selectedBox) => {
    const indexOfBox = store.boxes.findIndex(
      (box) => box.id === selectedBox.id
    );

    store.removeBox(indexOfBox);
  });
};

export { removeBoxes };
