import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerReducer, routerMiddleware } from "react-router-redux";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage";
import { Provider } from 'react-redux';

function App() {
  const hist = createBrowserHistory();
  const store = createStore(
    combineReducers({
      routing: routerReducer
    }),
    applyMiddleware(thunk, routerMiddleware(hist))
  );
  const history = syncHistoryWithStore(hist, store);


  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
  </Provider>
  );
}

export default App;
