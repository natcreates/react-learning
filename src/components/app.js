import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
// import BookList from '../containers/booklist';

export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <VideoList />
        </div>
    );
  }
}
