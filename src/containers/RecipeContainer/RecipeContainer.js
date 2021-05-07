import React, { useEffect } from 'react';
import { IoIosClock } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import {
  BiUser,
  BiMinusCircle,
  BiPlusCircle,
  BiBookmarkPlus,
  BiSearchAlt2,
  BiLoader,
} from 'react-icons/bi';
import Ingredient from '../../components/Recipe/Ingredient/ingredient';
import { connect } from 'react-redux';
import Error from '../../components/Layout/Error/Error';

const RecipeContainer = props => {
  // const [id, setId] = useState(null);
  // const [recipe, setRecipe] = useState(null);
  let { idRecipe } = useParams();
  const { onGetRecipeWithId } = props;

  useEffect(() => {
    if (idRecipe) {
      onGetRecipeWithId(idRecipe);
    }
  }, [idRecipe, onGetRecipeWithId]);
  let loadRecipe = (
    <div class="spinner">
      <BiLoader />
    </div>
  );
  if (!idRecipe) return <div></div>;
  if (props.error) loadRecipe = <Error message={props.messageError} />;
  if (props.dataRecipe) {
    loadRecipe = (
      <React.Fragment>
        <figure class="recipe__fig">
          <img
            src={props.dataRecipe.image_url}
            alt={props.dataRecipe.title}
            className="recipe__img"
          />
          <h1 className="recipe__title">
            <span>${props.dataRecipe.title}</span>
          </h1>
        </figure>

        <div className="recipe__details">
          <div className="recipe__info">
            <IoIosClock className="recipe__info-icon" />
            <span className="recipe__info-data recipe__info-data--minutes">
              {props.dataRecipe.cookingTime}
            </span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <BiUser className="recipe__info-icon" />
            <span className="recipe__info-data recipe__info-data--people">
              {props.dataRecipe.servings}
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
            {props.dataRecipe.ingredients.map((ing, index) => (
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
            <span className="recipe__publisher">
              {props.dataRecipe.publisher}
            </span>
            . Please check out directions at their website.
          </p>
          <a
            className="btn--small recipe__btn"
            href={props.dataRecipe.source_url}
          >
            <span>Directions</span>
            <BiSearchAlt2 className="search__icon" />
          </a>
        </div>
      </React.Fragment>
    );
  }

  return loadRecipe;
};
const mapStateToProps = state => {
  return {
    dataRecipe: state.recipe.recipe,
    error: state.recipe.error,
    messageError: state.recipe.messageError,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetRecipeWithId: id => dispatch(actions.getRecipeWithId(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
// https://forkify-api.herokuapp.com/api/v2

///////////////////////////////////////
