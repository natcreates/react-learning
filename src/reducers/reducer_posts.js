import {mapKeys} from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions/index';

// mapKeys can take an array of objects and return a new object
// using whatever is specified as the key
const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POST:
    // keep all the existing posts we have in state using ...state
    // make a new key on the state obj with the val of the particular post
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'i  d');
    default:
      return state;
  }
}

export default PostsReducer;
