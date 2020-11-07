import { selectBox } from '../../domain/items/box/use-cases/selectBox';

const onHandleClickBox = (box) => () => {
  selectBox(box);
};

export { onHandleClickBox };
