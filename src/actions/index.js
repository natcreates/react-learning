// When an event occurs, this triggers an action creator, a function that returns an action
// As an object, saying what its type is and perhaps some data.
// The action is sent automatically to all reducers
// Depending on what the action is, the reducer can choose to return a different piece of state
// (via a switch statement)
// If the type is x, then return new value of state (which includes any data), otherwise just return currentstate
// After all reducers have responded or not
// This is then piped into the application state, and matched via a key.
// This change is notified to all containers
// All components re-render
// And all containers re-render with new props

export function selectBook(book) {
  // needs to return an action - obj with type property
  // payload is more info about the action/state change
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
