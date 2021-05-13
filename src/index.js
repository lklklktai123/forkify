import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import recipeResultReducer from './store/reducer/resultRecipe';
import recipeReducer from './store/reducer/recipe';
import bookmarkReducer from './store/reducer/bookmark';
import { BrowserRouter } from 'react-router-dom';
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = combineReducers({
  resultRecipe: recipeResultReducer,
  recipe: recipeReducer,
  bookmark: bookmarkReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
