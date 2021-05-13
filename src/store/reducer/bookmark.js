import { updateObject } from '../../shared/utility';
import * as actionType from '../actions/actionTypes';
const initialState = {
  bookmarks: [],
};

const addBookmark = (state, action) => {
  const a = [1, 2, 3, 4, 5];
  const b = [...a, 4, 5, 6, 7];
  console.log(b);
  return updateObject(state, {
    bookmarks: state.bookmarks.push(action.dataBookmark),
  });
};
const removeBookmarkWidhId = (state, action) => {
  const newBookMarks = [state.bookmarks].filter(
    bookmark => bookmark.id !== action.id
  );
  return updateObject(state, { bookmarks: newBookMarks });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_BOOKMARK:
      return addBookmark(state, action);
    case actionType.REMOVE_BOOKMARK_WIDTH_ID:
      return removeBookmarkWidhId(state, action);
    default:
      return state;
  }
};
export default reducer;
