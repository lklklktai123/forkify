import React from 'react';
import Header from './components/Header/header';
import Recipe from './components/Recipe/recipe';
import SearchResults from './components/SearchResults/searchResults';
import Upload from './components/Upload/upload';
import { Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        {/* <Route
          path="/404"
          render={() => (
            <div>
              <span>Not found</span>
            </div>
          )}
        />
        */}
        <Redirect from="*" to="/" />
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
