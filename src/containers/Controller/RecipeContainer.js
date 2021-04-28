import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { IoIosClock } from "react-icons/io";
import {
  BiUser,
  BiMinusCircle,
  BiPlusCircle,
  BiBookmarkPlus,
  BiSearchAlt2,
  BiLoader,
} from "react-icons/bi";
import Ingredient from "../../components/Recipe/Ingredient/ingredient";

const RecipeContainer = () => {
  const [dataRecipe, setDataRecipe] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/recipes/${id}`)
      .then((response) => {
        let { recipe } = response.data.data;
        setDataRecipe({
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  let loadRecipe = null;
  if (!id) return <div></div>;
  loadRecipe = !dataRecipe ? (
    <div class="spinner">
      <BiLoader />
    </div>
  ) : (
    <React.Fragment>
      <figure class="recipe__fig">
        <img
          src={dataRecipe.image}
          alt={dataRecipe.title}
          className="recipe__img"
        />
        <h1 className="recipe__title">
          <span>${dataRecipe.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <IoIosClock className="recipe__info-icon" />
          <span className="recipe__info-data recipe__info-data--minutes">
            {dataRecipe.cookingTime}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <BiUser className="recipe__info-icon" />
          <span className="recipe__info-data recipe__info-data--people">
            {dataRecipe.servings}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
              <BiMinusCircle className="" />
            </button>
            <button className="btn--tiny btn--increase-servings">
              <BiPlusCircle />
            </button>
          </div>
        </div>

        <div className="recipe__user-generated">
          <BiUser className="" />
        </div>
        <button className="btn--round">
          <BiBookmarkPlus />
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {dataRecipe.ingredients.map((ing, index) => (
            <Ingredient
              key={`Ingredient${index}`}
              quantity={ing.quantity}
              unit={ing.unit}
              description={ing.description}
            />
          ))}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span className="recipe__publisher">{dataRecipe.publisher}</span>.
          Please check out directions at their website.
        </p>
        <a className="btn--small recipe__btn" href={dataRecipe.sourceUrl}>
          <span>Directions</span>
          <BiSearchAlt2 className="search__icon" />
        </a>
      </div>
    </React.Fragment>
  );
  return loadRecipe;
};

export default RecipeContainer;
// https://forkify-api.herokuapp.com/api/v2

///////////////////////////////////////
