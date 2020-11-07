const { createBox } = require('../../domain/items/box/use-cases/createBox');

const onHandlerClickAddBox = () => {
  createBox();
};

export { onHandlerClickAddBox };
