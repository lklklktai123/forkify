import images from '../Layout/exportImage';
import { IoIosSearch } from 'react-icons/io';
import { BiSmile, BiMessageEdit, BiBookmark } from 'react-icons/bi';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { useState, useEffect } from 'react';
const Header = props => {
  const [search, setSearch] = useState('');
  const { onSearchResultsRecipe } = props;

  useEffect(() => {
    const timer = setTimeout(function () {
      onSearchResultsRecipe(search);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search, onSearchResultsRecipe]);
  return (
    <header className="header">
      <img src={images.logo} alt="Logo" className="header__logo" />
      <div className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
        <button
          className="btn search__btn"
          //onClick={onSearchResultsRecipe(search)}
        >
          <IoIosSearch className="search__icon" />
          <span>Search</span>
        </button>
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <BiMessageEdit className="nav__icon" />
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <BiBookmark className="nav__icon" />
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <BiSmile className="bookmarks__icon" />
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>

                {/* <li class="preview">
            <a class="preview__link" href="#23456">
              <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__name">
                  Pasta with Tomato Cream ...
                </h4>
                <p class="preview__publisher">The Pioneer Woman</p>
              </div>
            </a>
          </li>  */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchResultsRecipe: search =>
      dispatch(actions.searchResultsRecipe(search)),
  };
};
export default connect(null, mapDispatchToProps)(Header);
