import uuid from 'uuid';

import store from '../../../../stores/MainStore';
import BoxModel from '../../../../stores/models/Box';
import getRandomColor from '../../../../utils/getRandomColor';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createBox = () => {
  const newBox = BoxModel.create({
    id: uuid(),
    width: randomInt(100, 200),
    height: randomInt(50, 100),
    color: getRandomColor(),
    left: randomInt(0, 1000),
    top: randomInt(0, 575),
  });

  store.addBox(newBox);
};

export { createBox };
