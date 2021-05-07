import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const initialState = {
  resultRecipes: [],
  loading: false,
  error: false,
  messageError: '',
};
const fetchResultRecipeStart = state => {
  return updateObject(state, { loading: true });
};

const fetchResultRecipeFail = (state, action) => {
  return updateObject(state, {
    resultRecipes: [],
    loading: false,
    error: true,
    messageError: action.messageError,
  });
};

const fetchResultRecipeSuccess = (state, action) => {
  return updateObject(state, {
    resultRecipes: action.recipeData,
    loading: false,
    error: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_RESULT_RECIPE_START:
      return fetchResultRecipeStart(state);
    case actionType.FETCH_RESULT_RECIPE_FAIL:
      return fetchResultRecipeFail(state, action);
    case actionType.FETCH_RESULT_RECIPE_SUCCESS:
      return fetchResultRecipeSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;
