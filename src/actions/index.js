import axios from 'axios';
const API_KEY = 'd370e198fbc46fe6a508f2ea738bdae9';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Middlewares are functions that intercept actions
// Redux promise, which is what we've installed separately
// intercepts the action payload below, which is a promise
// and means that by the time it reaches the reducer we have the data
// once the promise is fulfilled the middleware dispatches
// a new action with the same type to the reducer
export function fetchWeather(city) {
  const url = `${ROOT_URL}&${city},us`;
  const req = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
