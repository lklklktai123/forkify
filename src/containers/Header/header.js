import images from '../../components/Layout/exportImage';
import { IoIosSearch } from 'react-icons/io';
import { BiMessageEdit, BiBookmark } from 'react-icons/bi';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { useState, useEffect } from 'react';
import Bookmark from './Bookmark/Bookmark';
const Header = props => {
  const [search, setSearch] = useState('');
  const { onSearchResultsRecipe } = props;

  useEffect(() => {
    // persitsBookmarks();
    const timer = setTimeout(function () {
      onSearchResultsRecipe(search);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search, onSearchResultsRecipe]);
  let dataBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
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
            <Bookmark dataBookmarks={dataBookmarks} />
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
const mapStateToProps = state => {
  return {
    bookmarks: state.bookmark.bookmarks,
    dataRecipe: state.recipe.recipe,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
