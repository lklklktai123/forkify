// import { updateObject } from '../../shared/utility';
import * as actionType from '../actions/actionTypes';
const initialState = {
  bookmarks: [],
  loading: true,
};

const addBookmark = (state, action) => {
  state.bookmarks.push(action.dataBookmark);
  return state;
};
const removeBookmarkWidhId = (state, action) => {
  state.bookmarks = state.bookmarks.filter(value => value.id !== action.id);
  return state;
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
