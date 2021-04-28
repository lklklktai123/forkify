import Results from "./results/results";

const searchResults = (props) => {
  return (
    <div className="search-results">
      <Results />

      <div className="pagination">
        {/* <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page 1</span>
    </button>
    <button class="btn--inline pagination__btn--next">
      <span>Page 3</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>  */}
      </div>

      <p className="copyright">
        &copy; Copyright by
        <a className="twitter-link" href="https://twitter.com/jonasschmedtman">
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};

export default searchResults;
