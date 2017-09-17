// in ES6 JS is siloed - made separate unless explicitly imported
// go find React in our project - in node modules
// assign to variable React
// note that the core react knows how to create components
// reactDOM needed for rendering
// lodash needed for search throttling
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// in React we deal with data in the highest parent component - the App file
// get the Youtube search API
import YTSearch from 'youtube-api-search';
// get the searchBar component
// because it's a file we've written we need a proper reference
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// get Youtube API key
const API_KEY = 'AIzaSyBjNHd_9xfaKpKOL0ilLBVwoFu8xeqcuUQ';

// create a component that will produce HTML
// this is a class, not an instance
// need to instantiate before rendering
// const is ES6 - var that will not change
// fat arrow is ES6. Similar to function key word declaration
// difference is what 'this' inside the function means
// convention to put multiline JSX inside ()
class App extends Component {

    constructor(props) {
        // super calls the method on the parent class, Component
        super(props);
        // initialise state to keep track of changing list of videos
        this.state = {
            videos: [],
            selectedVideo: null
        };

        // perform initial search
        this.videoSearch('psybient');

    }

    // define search function to be passed down to searchbar
    videoSearch(term) {
        // perform Youtube search, and update state
        // with results of callback function
        // any change to state results in re-rendering
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // where key and value use identical terms, can use ES6
            // instead of videos: videos can use one term
            // set default selected video to the be the first video in the list
            this.setState({
                videos,
                selectedVideo: videos[0]
             });
        });
    }

    // videoList is fed video data from parent component
    // known as passing props
    // videoDetail needs a particular video passed in, the selected video
    // we pass videoList a callback function that takes a video as an arg and updates the state
    // searchbar calls onsearchtermchange with term, which is passed into function defined above
    render() {
        // debounce is a lodash function to throttle
        // debounce takes function we pass and returns new function that can only be called
        // once every 300ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// instantiate by passing in a JSX tag. Can use a self-closing tag if the element has nothing inside
// render on screen
// first argument is the component, second is an existing DOM node
ReactDOM.render(<App />, document.querySelector('.container'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
