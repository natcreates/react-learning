import { combineReducers } from 'redux';
import WeatherReducer from './reducer_fetch_weather';

// combine reducers
// adds a key to application state called books
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
