import * as actionTypes from './actionTypes';
import axios from '../../axios';
export const fetchResultRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RESULT_RECIPE_START,
  };
};
export const fetchResultRecipeFail = error => {
  return {
    type: actionTypes.FETCH_RESULT_RECIPE_FAIL,
    error: error,
  };
};
export const fetchResultRecipeSuccess = recipeData => {
  return {
    type: actionTypes.FETCH_RESULT_RECIPE_SUCCESS,
    recipeData: recipeData,
  };
};
export const searchResultsRecipe = search => {
  return dispatch => {
    dispatch(fetchResultRecipeStart());
    axios
      .get(`recipes?search=${search}&key=fcf0a206-2e45-4644-a6a5-7fac29acab6c`)
      .then(response => {
        dispatch(fetchResultRecipeSuccess(response.data.data.recipes));
      })
      .catch(err => {
        dispatch(fetchResultRecipeFail(err));
      });
  };
};

// export const getRecipeWithId = (id) => {
//   return (dispatch) => {
//     dispatch(fetchRecipeStart());
//     axios
//       .get(`get?rId=${id}`)
//       .then((response) => {
//         console.log(response);
//         dispatch(fetchRecipeSuccess(response.data.recipes));
//       })
//       .catch((err) => {
//         dispatch(fetchRecipeFail(err));
//       });
//   };
// };
