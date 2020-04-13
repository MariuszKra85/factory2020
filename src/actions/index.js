/* eslint-disable prefer-template */
export const removeItem = (itemType, id) => {
  return {
    type: `REMOVE_ITEM`,
    payload: {
      itemType,
      id,
    },
  };
};
export const AddItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        itemType,
        id: getId(),
        ...itemContent,
      },
    },
  };
};
