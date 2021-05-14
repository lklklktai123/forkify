import { BiSmile } from 'react-icons/bi';
import React from 'react';

let bookmark = props => {
  let dataBook = null;
  console.log(props.dataBookmarks);
  if (!props.dataBookmarks || props.dataBookmarks.length <= 0) {
    dataBook = (
      <div className="message">
        <div>
          <BiSmile className="bookmarks__icon" />
        </div>
        <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
      </div>
    );
  } else {
    dataBook = props.dataBookmarks.map(bookmark => (
      <li class="preview" key={bookmark.id}>
        <a class="preview__link" href={`#${bookmark.id}`}>
          <figure class="preview__fig">
            <img src={bookmark.image_url} alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">{bookmark.title}</h4>
            <p class="preview__publisher">{bookmark.publisher}</p>
          </div>
        </a>
      </li>
    ));
  }

  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">{dataBook}</ul>
    </div>
  );
};
export default bookmark;
