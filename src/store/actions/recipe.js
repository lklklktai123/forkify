import * as actionTypes from "./actionTypes";
import axios from "../../../src/axios";
export const fetchRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_START,
  };
};
export const fetchRecipeFail = (error) => {
  return {
    type: actionTypes.FETCH_RECIPE_FAIL,
    error: error,
  };
};
export const fetchRecipeSuccess = (recipeData) => {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    recipeData: recipeData,
  };
};
export const searchResultsRecipe = (search) => {
  return (dispatch) => {
    dispatch(fetchRecipeStart());
    axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
      .then((response) => {
        dispatch(fetchRecipeSuccess(response.data.recipes));
      })
      .catch((err) => {
        dispatch(fetchRecipeFail(err));
      });
  };
};
