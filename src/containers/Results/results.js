import React from 'react';
import { BiUser } from 'react-icons/bi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RES_PER_PAGE } from '../..//shared/utilities/config';

const Results = props => {
  const getSearchResultPasge = (page = props.currentPage) => {
    const start = (page - 1) * RES_PER_PAGE;
    const end = page * RES_PER_PAGE;
    return props.rec.slice(start, end);
  };
  let showKey = 'preview__user-generated hidden';
  const isKey = dataRecipe => {
    return (showKey = dataRecipe.key
      ? 'preview__user-generated'
      : 'preview__user-generated hidden');
  };

  let showRecipe = 'Cannot find !!!';
  if (getSearchResultPasge().length)
    showRecipe = getSearchResultPasge().map(rec => (
      <ul className="results" key={rec.id}>
        <li className="preview">
          <Link
            to={`/recipe-container/${rec.id}`}
            activeClassName="preview__link preview__link--active"
          >
            <figure className="preview__fig">
              <img src={rec.image_url} alt={rec.title} />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">{rec.title}</h4>
              <p className="preview__publisher">{rec.publisher}</p>
              <div className={isKey(rec)}>
                <BiUser />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    ));
  return <React.Fragment>{showRecipe}</React.Fragment>;
};
const mapStateToProps = state => {
  return {
    rec: state.resultRecipe.resultRecipes,
    currentPage: state.resultRecipe.currentPage,
  };
};

export default connect(mapStateToProps, null)(Results);
