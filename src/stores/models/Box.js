import { types } from 'mobx-state-tree';

const BoxModel = types
  .model('Box', {
    id: types.identifier,
    width: 200,
    height: 100,
    color: '#FFF000',
    left: 200,
    top: 100,
    selected: false,
    node: types.maybe(types.frozen()),
  })
  .views((self) => ({}))
  .actions((self) => ({
    select() {
      self.selected = true;
    },
    deselect() {
      self.selected = false;
    },
    setColor(color) {
      self.color = color;
    },
    saveNode(node) {
      self.node = node;
    },
  }));

export default BoxModel;
