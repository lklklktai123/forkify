import React from 'react';
import Header from './components/Header/header';
import Recipe from './components/Recipe/recipe';
import SearchResults from './components/SearchResults/searchResults';
import Upload from './components/Upload/upload';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <SearchResults />
        <Recipe />
      </div>
      <div className="overlay hidden"></div>
      <Upload />
    </React.Fragment>
  );
};

export default App;
