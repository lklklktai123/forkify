import React from "react";
import Header from "./components/Header/header";
import Recipe from "./components/Recipe/recipe";
import SearchResults from "./components/SearchResults/searchResults";
import Upload from "./components/Upload/upload";
import RecipeContainer from "./containers/RecipeContainer/RecipeContainer";
import { Route, Router, Switch } from "react-router-dom";

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
