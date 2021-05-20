import * as actionTypes from './actionTypes';
import axios from '../../axios';
import timeout from '../../shared/utilities/CheckRuntimeApi';
import { TIMEOUT_SEC, API_KEY } from '../../shared/utilities/config';

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

export const updateServings = newServings => {
  return {
    type: actionTypes.LOAD_UPDATE_SERVINGS,
    newServings: newServings,
  };
};
export const setBookmarkedWidthId = marked => {
  return {
    type: actionTypes.SET_BOOMARKED,
    bookmarked: marked,
  };
};

export const addNewRecipeStart = () => {
  return {
    type: actionTypes.ADD_NEW_RECIPE_START,
  };
};

export const addNewRecipeFail = error => {
  return {
    type: actionTypes.ADD_NEW_RECIPE_FAIL,
    messageError: error,
  };
};

export const addNewRecipeSuccess = recipe => {
  return {
    type: actionTypes.ADD_NEW_RECIPE_SUCCESS,
    recipe: recipe,
  };
};

export const addRecipe = recipe => {
  return dispatch => {
    dispatch(addNewRecipeStart());
    axios
      .post(`recipes?key=${API_KEY}`, recipe)
      .then(response => {
        dispatch(addNewRecipeSuccess(response.data.data.recipe));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(addNewRecipeFail(err.message));
      });
  };
};
