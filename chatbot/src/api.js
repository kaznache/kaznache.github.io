import axios from 'axios';

const KEY = 'AIzaSyBiZdZeqMQ4jf7iTl0RP5ZiJREiLc0WS4o';
const CX = '012964085075353170433:obhxjshpeka';

const API_DEFAULT_PARAMS = {
    key: `${KEY}`,
    cx: `${CX}`
};

const api = axios.create({
  baseURL: 'https://www.googleapis.com/customsearch/v1'
});

api.interceptors.request.use(config => {
  config.params = {
    ...API_DEFAULT_PARAMS,
    ...config.params,
  };
  return config;
});

export default {
  getSearchResults: (q) => {
    return api.get('', {
      params: { q }
    })
  }
}
