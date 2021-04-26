const searchResults = () => {
  return (
    <div class="search-results">
      <ul class="results">
        {/* <li class="preview">
      <a class="preview__link preview__link--active" href="#23456">
        <figure class="preview__fig">
          <img src="src/img/test-1.jpg" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
          <p class="preview__publisher">The Pioneer Woman</p>
          <div class="preview__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
      */}
      </ul>

      <div class="pagination">
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

      <p class="copyright">
        &copy; Copyright by
        <a class="twitter-link" href="https://twitter.com/jonasschmedtman">
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};
export default searchResults;
