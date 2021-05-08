import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { RES_PER_PAGE } from '../../utilities/config';
import { connect } from 'react-redux';
import React from 'react';
import * as actions from '../../store/actions/index';

const pagination = props => {
  const { curPage, onsetCurrentPage } = props;
  const numPages = Math.ceil(props.rec.length / RES_PER_PAGE);
  console.log(numPages, curPage);
  let loadPage = '';
  if (curPage === 1 && numPages > 1) {
    loadPage = (
      <button
        class="btn--inline pagination__btn--next"
        onClick={() => onsetCurrentPage(curPage + 1)}
      >
        <span>Page {curPage + 1}</span>
        <BiArrowToRight className="search__icon" />
      </button>
    );
  }

  // Last page
  else if (curPage === numPages && numPages > 1) {
    loadPage = (
      <button
        class="btn--inline pagination__btn--prev"
        onClick={() => onsetCurrentPage(curPage - 1)}
      >
        <BiArrowToLeft className="search__icon" />
        <span>Page {curPage - 1}</span>
      </button>
    );
  }

  // Other page
  else if (curPage < numPages) {
    loadPage = (
      <React.Fragment>
        <button
          class="btn--inline pagination__btn--prev"
          onClick={() => onsetCurrentPage(curPage - 1)}
        >
          <BiArrowToLeft className="search__icon" />
          <span>Page {curPage - 1}</span>
        </button>
        <button
          class="btn--inline pagination__btn--next"
          onClick={() => onsetCurrentPage(curPage + 1)}
        >
          <span>Page {curPage + 1}</span>
          <BiArrowToRight className="search__icon" />
        </button>
      </React.Fragment>
    );
  }

  return <div className="pagination">{loadPage}</div>;
};
const mapStatetoProps = state => {
  return {
    rec: state.resultRecipe.resultRecipes,
    curPage: state.resultRecipe.currentPage,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onsetCurrentPage: current => dispatch(actions.setCurrentPage(current)),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(pagination);
