import React from 'react';
const upload = () => {
  const addHandlerHideWindow = () => {
    const window = document.querySelector('.add-recipe-window');
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
    window.classList.add('hidden');
  };
  const handleSubmitAddRecipe = e => {
    e.preventDefault();
    const dataForm = [...new FormData(e.target)];
    const ingredient = dataForm
      .filter(data => data[0].startsWith('ingredient') && data[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Error format Ingredient');
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit: unit ? unit : null,
          description: description ? description : null,
        };
      });
    let recipe = {};
    for (const value of dataForm) {
      if (value[0] === 'title') {
        recipe.title = value[1];
      } else if (value[0] === 'sourceUrl') {
        recipe.sourceUrl = value[1];
      } else if (value[0] === 'image') {
        recipe.image = value[1];
      } else if (value[0] === 'publisher') {
        recipe.publisher = value[1];
      } else if (value[0] === 'cookingTime') {
        recipe.cookingTime = value[1];
      } else if (value[0] === 'servings') {
        recipe.servings = value[1];
      }
      // switch (value[0]) {
      //   case 'title':
      //     recipe.title = value[1];

      //     break;
      //   case 'sourceUrl':
      //     recipe.sourceUrl = value[1];

      //     break;
      //   case 'image':
      //     recipe.image = value[1];

      //     break;
      //   case 'publisher':
      //     recipe.publisher = value[1];

      //     break;
      //   case 'cookingTime':
      //     recipe.cookingTime = value[1];

      //     break;
      //   case 'servings':
      //     recipe.servings = value[1];

      //     break;
      //   default:
      //     null;
    }
    recipe.ingredients = ingredient;
    console.log(recipe);
  };
  return (
    <React.Fragment>
      <div className="overlay hidden" onClick={addHandlerHideWindow}></div>
      <div className="add-recipe-window hidden">
        <button className="btn--close-modal" onClick={addHandlerHideWindow}>
          &times;
        </button>
        <form className="upload" onSubmit={handleSubmitAddRecipe}>
          <div className="upload__column">
            <h3 className="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input value="TEST" required name="title" type="text" />
            <label>URL</label>
            <input value="TEST" required name="sourceUrl" type="text" />
            <label>Image URL</label>
            <input value="TEST" required name="image" type="text" />
            <label>Publisher</label>
            <input value="TEST" required name="publisher" type="text" />
            <label>Prep time</label>
            <input value="23" required name="cookingTime" type="number" />
            <label>Servings</label>
            <input value="23" required name="servings" type="number" />
          </div>

          <div className="upload__column">
            <h3 className="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              value="0.5,kg,Rice"
              type="text"
              required
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 2</label>
            <input
              value="1,,Avocado"
              type="text"
              name="ingredient-2"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 3</label>
            <input
              value=",,salt"
              type="text"
              name="ingredient-3"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient-4"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient-5"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 6</label>
            <input
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
};

export default upload;
