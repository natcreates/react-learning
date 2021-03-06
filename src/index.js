import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter talks to the History library, which parses changes in url
// Route is a React component we render inside React components that tells
// React-router which url its display corresponds to
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './container/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// the Switch component from React-router
// looks at routes and will render the first matching url
// this means you need the most specific at the top
// otherwise React-router uses fuzzy matching, so will render root
// as well as others with forward slashes
// note that react-router will pass whatever the wildcard is - :id - as prop
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
