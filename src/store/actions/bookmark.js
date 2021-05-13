import * as actionTypes from './actionTypes';

export const addBookmark = recipe => {
  return {
    type: actionTypes.ADD_BOOKMARK,
    dataBookmark: recipe,
  };
};
export const removeBookmarkWidhId = id => {
  return {
    type: actionTypes.REMOVE_BOOKMARK_WIDTH_ID,
    id: id,
  };
};
