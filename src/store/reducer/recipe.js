import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const initialState = {
  recipes: [],
  loading: false,
};

const fetchRecipeStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchRecipeFail = (state) => {
  return updateObject(state, { recipes: [], loading: false });
};

const fetchRecipeSuccess = (state, action) => {
  return updateObject(state, { recipes: action.recipeData, loading: false });
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
