import axios from 'axios';

const baseUrl = `https://nijin-server.vercel.app/api/explorer`;

/**
 * This function uses the axios library to make an asynchronous GET request to a specified base URL and
 * returns the response data.
 * @returns The function `getData` is returning the data obtained from the API endpoint specified by
 * the `baseUrl` variable. The data is obtained using the `axios` library and the `await` keyword is
 * used to wait for the response to be received before returning the data.
 */
const getData = async () => {
  let response = await axios.get(baseUrl);
  return response.data;
}

/**
 * This function retrieves specific data for a given place name using an HTTP GET request.
 * @param placeName - The parameter `placeName` is a string that represents the name of a place. It is
 * used in the URL to make a GET request to the server to retrieve specific data about that place.
 * @returns The function `getSpecificData` is returning the data of a specific place, which is obtained
 * by making a GET request to the API endpoint `/places/` using the axios
 * library. The data returned is the response data from the API call.
 */
const getSpecificData = async (placeName) => {
  let response = await axios.get(`${baseUrl}/places/${placeName}`);
  return response.data;
}

/**
 * This function retrieves related destinations based on a given place name using an asynchronous HTTP
 * request.
 * @param placeName - The parameter `placeName` is a string representing the name of a place for which
 * we want to retrieve related destinations.
 * @returns The function `getSimilarDestinations` is returning the data obtained from the API endpoint
 * `/places/related/`. The data is expected to be related destinations to the
 * input `placeName`. The data is returned as a Promise, which will resolve to the actual data once the
 * API call is completed.
 */
const getSimilarDestinations = async (placeName) => {
  let response = await axios.get(`${baseUrl}/places/related/${placeName}`);
  return response.data;
}

/**
 * This function retrieves the current temperature in Celsius for a given location using the
 * WeatherAPI.
 * @param placeName - The parameter `placeName` is a string that represents the name of a location for
 * which the weather forecast is requested. It is used in the API call to retrieve the weather data for
 * that location.
 * @returns The function `weatherResponse` is returning the current temperature in Celsius for the
 * specified `placeName` using the Weather API.
 */
const weatherResponse = async (placeName) => {
  let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=db224014a65b48d987f181930231404&q=${placeName}&days=1&aqi=no&alerts=yes;`);
  return response.data.current.temp_c+"°C";
}

export default getData;

export { getSpecificData, getSimilarDestinations, weatherResponse };