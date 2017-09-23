import { FETCH_WEATHER } from '../actions/index.js';

// we want a list to make initial state an emty array
export default function(state = [], action) {
    switch(action.type) {
      case FETCH_WEATHER:
      // make sure we use a non-mutating method
      // return a new array with the new data added onto the end
      // non ES6 below
      //  return state.concat([ action.payload.data ]);
      // ES6 version - add to front of array
      return [ action.payload.data, ...state ];
    }    // if not the type of action we want, return current state
    return state;
}
