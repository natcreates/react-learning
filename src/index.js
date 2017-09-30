import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter talks to the History library, which parses changes in url
// Route is a React component we render inside React components that tells
// React-router which url its display corresponds to
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './components/PostsIndex';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Route path="/" component={PostIndex}/>
      <Route path="/posts/:id" component={PostsShow}/>
      <Route path="/posts/new" component={PostsNew}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
