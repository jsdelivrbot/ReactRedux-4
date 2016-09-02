import axios from 'axios';

const API_KEY = '9539f7fc862d298620f90096660773de';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},bg`;
    const request = axios.get(url);

   

    return{
        type:FETCH_WEATHER,
        payload: request
    }
}