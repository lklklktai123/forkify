import { BiUser } from "react-icons/bi";
import { connect } from "react-redux";
const results = (props) => {
  props.rec.map((val) => console.log(val.recipe_id));
  let showRecipe = "Cannot find !!!";
  if (props.rec.length)
    showRecipe = props.rec.map((rec) => (
      <ul className="results">
        <li className="preview">
          <a className="preview__link preview__link--active" href="#23456">
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
          </a>
        </li>
      </ul>
    ));

  return showRecipe;
};
const mapStateToProps = (state) => {
  return { rec: state.recipe.recipes };
};
export default connect(mapStateToProps, null)(results);
