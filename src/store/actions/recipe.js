import * as actionTypes from './actionTypes';
import axios from '../../axios';
import timeout from '../../utilities/CheckRuntimeApi';
import { TIMEOUT_SEC } from '../../utilities/config';
export const fetchRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_START,
  };
};
export const fetchRecipeFail = messageError => {
  return {
    type: actionTypes.FETCH_RECIPE_FAIL,
    messageError: messageError,
  };
};
export const fetchRecipeSuccess = recipeData => {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    recipe: recipeData,
  };
};

export const getRecipeWithId = id => {
  return dispatch => {
    dispatch(fetchRecipeStart());
    const fetchRecipe = axios.get(`recipes/${id}`);
    Promise.race([fetchRecipe, timeout(TIMEOUT_SEC)])
      .then(response => {
        if (response.status === 200);
        dispatch(fetchRecipeSuccess(response.data.data.recipe));
      })
      .catch(err => {
        dispatch(fetchRecipeFail(err.message));
      });
  };
};
