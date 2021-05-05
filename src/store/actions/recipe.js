import * as actionTypes from './actionTypes';
import axios from '../../axios';
export const fetchRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_START,
  };
};
export const fetchRecipeFail = error => {
  return {
    type: actionTypes.FETCH_RECIPE_FAIL,
    error: error,
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
    axios
      .get(`recipes/${id}`)
      .then(response => {
        dispatch(fetchRecipeSuccess(response.data.data.recipe));
      })
      .catch(err => {
        dispatch(fetchRecipeFail(err));
      });
  };
};
