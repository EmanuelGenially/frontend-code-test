const selectBox = (box) => {
  if (!box.selected) {
    box.select();
  }
};

export { selectBox };
