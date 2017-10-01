import {mapKeys} from 'lodash';
import FETCH_POSTS from '../actions/index';

// mapKeys can take an array of objects and return a new object
// using whatever is specified as the key
const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

export default PostsReducer;
