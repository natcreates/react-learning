import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POST = 'SAVE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

// redux-promise will intercept the promise returned from the network req
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function savePost() {
  const request = axios.post(`${ROOT_URL}/posts/new`);

    return {
        type: SAVE_POST,
        payload: request
    };
}
