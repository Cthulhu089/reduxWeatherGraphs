import axios from 'axios';

const API_KEY = 'e1c3c050d844fdddc64895e7e827992e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export let fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
