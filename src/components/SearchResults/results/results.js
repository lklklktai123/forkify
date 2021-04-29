import React from "react";
import { BiUser } from "react-icons/bi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeContainer from "../../../containers/RecipeContainer/RecipeContainer";
import { Route, Switch } from "react-router-dom";

const results = (props) => {
  let showRecipe = "Cannot find !!!";
  if (props.rec.length)
    showRecipe = props.rec.map((rec) => (
      <ul className="results" key={rec.recipe_id}>
        <li className="preview">
          <Link
            to={`/recipe-container/${rec.recipe_id}`}
            activeClassName="preview__link preview__link--active"
          >
            <figure className="preview__fig">
              <img src={rec.image_url} alt={rec.title} />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">{rec.title}</h4>
              <p className="preview__publisher">{rec.publisher}</p>
              <div className="preview__user-generated">
                <BiUser />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    ));
  return (
    <React.Fragment>
      {showRecipe}
      <Switch>
        <Route path="/recipe-container/:idRecipe" component={RecipeContainer} />
      </Switch>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return { rec: state.recipe.recipes };
};

export default connect(mapStateToProps, null)(results);
