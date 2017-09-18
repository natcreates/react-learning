// reducers are called with state, and the action returned
// from an action creator
// state arg not app state but only state this reducer is responsible for
// this piece of state is fed in every time this is called
// state is set to null initially - this is first state of app on load
export default function(state = null, action) {
    switch(action.type) {
      case 'BOOK_SELECTED':
        return action.payload;
    }
    // if not the type of action we want, return current state
    return state;
}
