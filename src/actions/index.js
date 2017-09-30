import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts(player, currentCount) {
  const request = axios.get(`${ROOT_URL}/posts`);

// redux-promise will intercept the promise returned from the network req
    return {
        type: FETCH_POSTS,
        payload: request
    };
}
