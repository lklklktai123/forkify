import React, { useEffect, useState } from 'react';
import { IoIosClock } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import {
  setStorageBookmarks,
  getStorageBookmarks,
} from '../../shared/utilities/helper';
import {
  BiUser,
  BiMinusCircle,
  BiPlusCircle,
  BiBookmarkPlus,
  BiSearchAlt2,
  BiLoader,
  BiBookmark,
} from 'react-icons/bi';
import Ingredient from '../../components/Recipe/Ingredient/ingredient';
import { connect } from 'react-redux';
import Error from '../../../src/components/Layout/Error/Error';

const RecipeContainer = props => {
  let { idRecipe } = useParams();
  const { onGetRecipeWithId, onSetBookMarkedWidthId, dataRecipe } = props;
  useEffect(() => {
    if (idRecipe) {
      onGetRecipeWithId(idRecipe);
    }
  }, [idRecipe, onGetRecipeWithId]);

  const increaseServings = () => {
    props.onUpdateServings(dataRecipe.servings + 1);
  };
  const decreaseServings = () => {
    if (dataRecipe.servings - 1) {
      props.onUpdateServings(dataRecipe.servings - 1);
    } else {
      alert('Serving cannot <= 0 !!!"');
      return <Error message="Serving cannot <= 0 !!!" />;
    }
  };
  let bookmarks = null;
  const setMarKed = (bookmarks, id) => {
    let dataSetMarked = bookmarks ? (
      bookmarks.some(bookmark => bookmark.id === id) ? (
        <BiBookmark />
      ) : (
        <BiBookmarkPlus />
      )
    ) : (
      <BiBookmarkPlus />
    );
    return dataSetMarked;
  };
  let userKey = document.querySelector('.recipe__user-generated');
  console.log(dataRecipe);
  const bookmarkHandler = id => {
    if (!getStorageBookmarks()) {
      setStorageBookmarks([dataRecipe]);
      onSetBookMarkedWidthId(true);
    } else if (getStorageBookmarks()) {
      bookmarks = JSON.parse(getStorageBookmarks());
      if (!bookmarks.some(bookmark => bookmark.id === id)) {
        bookmarks.push(dataRecipe);
        onSetBookMarkedWidthId(true);
        setStorageBookmarks(bookmarks);
      } else {
        const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        onSetBookMarkedWidthId(false);
        setStorageBookmarks(newBookmarks);
      }
    }
  };
  let loadRecipe = (
    <div class="spinner">
      <BiLoader />
    </div>
  );
  const showKey = dataRecipe
    ? dataRecipe.key
      ? 'recipe__user-generated'
      : 'recipe__user-generated hidden'
    : 'recipe__user-generated hidden';
  if (!idRecipe) return <div></div>;
  if (props.error) loadRecipe = <Error message={props.messageError} />;
  if (dataRecipe) {
    loadRecipe = (
      <React.Fragment>
        <figure class="recipe__fig">
          <img
            src={dataRecipe.image_url}
            alt={dataRecipe.title}
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
              <button
                className="btn--tiny btn--increase-servings"
                onClick={decreaseServings}
              >
                <BiMinusCircle className="" />
              </button>
              <button
                className="btn--tiny btn--increase-servings"
                onClick={increaseServings}
              >
                <BiPlusCircle />
              </button>
            </div>
          </div>
          <div className={showKey}>
            <BiUser className="" />
          </div>
          <button
            className="btn--round btn--bookmark"
            onClick={() => bookmarkHandler(dataRecipe.id)}
          >
            {setMarKed(JSON.parse(getStorageBookmarks()), dataRecipe.id)}
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
          <a className="btn--small recipe__btn" href={dataRecipe.source_url}>
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
    bookmarks: state.bookmark.bookmarks,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetRecipeWithId: id => dispatch(actions.getRecipeWithId(id)),
    onUpdateServings: newServings =>
      dispatch(actions.updateServings(newServings)),
    onSetBookMarkedWidthId: marked =>
      dispatch(actions.setBookmarkedWidthId(marked)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
// https://forkify-api.herokuapp.com/api/v2

///////////////////////////////////////
