import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const initialState = {
  recipe: null,
  loading: false,
};
const fetchRecipeStart = state => {
  return updateObject(state, { loading: true });
};

const fetchRecipeFail = state => {
  return updateObject(state, { recipe: null, loading: false });
};

const fetchRecipeSuccess = (state, action) => {
  return updateObject(state, {
    recipe: action.recipe,
    loading: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_RECIPE_START:
      return fetchRecipeStart(state);
    case actionType.FETCH_RECIPE_FAIL:
      return fetchRecipeFail(state);
    case actionType.FETCH_RECIPE_SUCCESS:
      return fetchRecipeSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;
