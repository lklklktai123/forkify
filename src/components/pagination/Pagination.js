import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { RES_PER_PAGE } from '../../shared/utilities/config';
import { connect } from 'react-redux';
import React from 'react';
import * as actions from '../../store/actions/index';

const pagination = props => {
  const { curPage, onsetCurrentPage } = props;
  const numPages = Math.ceil(props.rec.length / RES_PER_PAGE);
  // Implementation in ES6
  const paginationHandler = (c, m) => {
    let current = c,
      last = m,
      delta = 1,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };
  let loadPage = null;

  //  loadPage = paginationHandler(curPage, numPages).map(value =>
  //   value !== '...' ? (
  //     <button
  //       class="btn--inline pagination__btn--next"
  //       onClick={() => onsetCurrentPage(value)}
  //     >
  //       <span>Page {value}</span>
  //       <BiArrowToRight className="search__icon" />
  //     </button>
  //   ) : (
  //     <button class="btn--inline pagination__btn--next">
  //       <span>{value}</span>
  //     </button>
  //   )
  // );

  if (curPage === 1 && numPages > 1) {
    loadPage = (
      <button
        class="btn--inline pagination__btn--prev"
        onClick={() => onsetCurrentPage(curPage + 1)}
      >
        <BiArrowToRight className="search__icon" />
        <span>Page {curPage + 1}</span>
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
