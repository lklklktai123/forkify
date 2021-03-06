import { BiSmile } from 'react-icons/bi';
import RecipeContainer from '../../containers/DetailsRecipe/DetailsRecipe';
import { Route, Switch } from 'react-router-dom';
const recipe = () => {
  return (
    <div className="recipe">
      <Switch>
        <Route path="/recipe-container/:idRecipe" component={RecipeContainer} />
      </Switch>
      <div className="message">
        <div>
          <BiSmile className="recipe__icon-smile" />
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>

      {/* <!-- <div class="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div> --> */}
    </div>
  );
};
export default recipe;
