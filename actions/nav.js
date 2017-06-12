export const SELECT_NAVITEM = 'SELECT_NAVITEM';

export const selectItem = (x, y) => {
  return { type: SELECT_NAVITEM, x, y };
};
