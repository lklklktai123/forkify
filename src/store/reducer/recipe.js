import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities/utility';
const initialState = {
  recipe: null,
  loading: false,
  error: false,
  messageError: '',
  status: false,
};
const fetchRecipeStart = state => {
  return updateObject(state, { loading: true, status: false });
};

const fetchRecipeFail = (state, action) => {
  return updateObject(state, {
    recipe: null,
    loading: false,
    error: true,
    messageError: action.messageError,
    status: false,
  });
};

const fetchRecipeSuccess = (state, action) => {
  return updateObject(state, {
    recipe: action.recipe,
    loading: false,
    error: false,
    status: false,
  });
};

const addNewRecipeStart = (state, action) => {
  return updateObject(state, { loading: true, status: false });
};

const addNewRecipeFail = (state, action) => {
  return updateObject(state, {
    error: true,
    loading: false,
    messageError: action.messageError,
    status: false,
  });
};

const addNewRecipeSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: false,
    status: true,
    recipe: action.recipe,
  });
};
const updateServings = (state, action) => {
  const newServings = action.newServings;
  const newRecipe = { ...state.recipe };
  const newIngredients = [...state.recipe.ingredients].map(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    return ing;
  });
  newRecipe.ingredients = newIngredients;
  newRecipe.servings = newServings;
  return updateObject(state, { recipe: newRecipe });
};
const setBookmarked = (state, action) => {
  const newRecipe = { ...state.recipe };
  newRecipe.bookmarked = action.bookmarked;
  return updateObject(state, { recipe: newRecipe });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_RECIPE_START:
      return fetchRecipeStart(state);
    case actionType.FETCH_RECIPE_FAIL:
      return fetchRecipeFail(state, action);
    case actionType.FETCH_RECIPE_SUCCESS:
      return fetchRecipeSuccess(state, action);
    case actionType.LOAD_UPDATE_SERVINGS:
      return updateServings(state, action);
    case actionType.SET_BOOMARKED:
      return setBookmarked(state, action);
    case actionType.ADD_NEW_RECIPE_START:
      return addNewRecipeStart(state, action);
    case actionType.ADD_NEW_RECIPE_FAIL:
      return addNewRecipeFail(state, action);
    case actionType.ADD_NEW_RECIPE_SUCCESS:
      return addNewRecipeSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;
