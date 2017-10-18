import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POST = 'SAVE_POST';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST = 'DELETE_POST';

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

export function createPost(values, callback) {
  // call the callback once the promise returned from axios is resolved
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return {
        type: SAVE_POST,
        payload: request
    };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}
