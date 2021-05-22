import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import {
  getStorageBookmarks,
  setStorageBookmarks,
} from '../../shared/utilities/helper';
import Error from '../../components/Layout/Error/Error';
const Upload = props => {
  const { uploadValue, setUploadValue } = useState('');
  const { status, dataRecipe } = props;
  useEffect(() => {}, [status, dataRecipe]);
  const addHandlerHideWindow = () => {
    const window = document.querySelector('.add-recipe-window');
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
    window.classList.add('hidden');
  };

  const handleSubmitAddRecipe = e => {
    e.preventDefault();
    const dataForm = [...new FormData(e.target)];
    const ingredients = dataForm
      .filter(data => data[0].startsWith('ingredient') && data[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) alert('Error format Ingredient');
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit: unit ? unit : null,
          description: description ? description : null,
        };
      });
    const recipe = { ingredients };
    for (const value of dataForm) {
      if (value[0] === 'title') {
        recipe.title = value[1];
      } else if (value[0] === 'sourceUrl') {
        recipe.source_url = value[1];
      } else if (value[0] === 'image') {
        recipe.image_url = value[1];
      } else if (value[0] === 'publisher') {
        recipe.publisher = value[1];
      } else if (value[0] === 'cookingTime') {
        recipe.cooking_time = +value[1];
      } else if (value[0] === 'servings') {
        recipe.servings = +value[1];
      }
    }
    if (recipe) {
      props.onAddRecipe(recipe);
    }
  };
  let dataUpload = null;
  let bookmarks = null;
  if (status && dataRecipe.id) {
    console.log(getStorageBookmarks(), dataRecipe);
    if (!getStorageBookmarks()) {
      setStorageBookmarks([dataRecipe]);
    } else if (getStorageBookmarks()) {
      bookmarks = JSON.parse(getStorageBookmarks());
      if (!bookmarks.some(bookmark => bookmark.id === dataRecipe.id)) {
        bookmarks.push(dataRecipe);
        setStorageBookmarks(bookmarks);
      }
    }
    dataUpload = <Redirect to={`/recipe-container/${dataRecipe.id}`} />;
  } else {
    dataUpload = (
      <React.Fragment>
        <div className="overlay hidden" onClick={addHandlerHideWindow}></div>
        {/* <Error message="aaaaaaaaaaaaaaaaaaaa" /> */}
        <div className="add-recipe-window hidden">
          <button className="btn--close-modal" onClick={addHandlerHideWindow}>
            &times;
          </button>
          <form className="upload" onSubmit={handleSubmitAddRecipe}>
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="title"
                type="text"
              />
              <label>URL</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="sourceUrl"
                type="text"
              />
              <label>Image URL</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="image"
                type="text"
              />
              <label>Publisher</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="publisher"
                type="text"
              />
              <label>Prep time</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="cookingTime"
                type="number"
              />
              <label>Servings</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                required
                name="servings"
                type="number"
              />
            </div>

            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 2</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 3</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 4</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 5</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 6</label>
              <input
                value={uploadValue}
                onchange={event => setUploadValue(event.target.value)}
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
            </div>

            <button className="btn upload__btn">
              <svg>
                <use href="src/img/icons.svg#icon-upload-cloud"></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

  return dataUpload;
};
const mapStateToProps = state => {
  return {
    dataRecipe: state.recipe.recipe,
    status: state.recipe.status,
    error: state.recipe.error,
    message: state.recipe.messageError,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddRecipe: recipe => dispatch(actions.addRecipe(recipe)),
    onFetchRecipeFail: message => dispatch(actions.fetchRecipeFail(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
