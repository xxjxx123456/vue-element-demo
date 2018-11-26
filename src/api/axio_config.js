import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.8.85:8998';
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Origin': '*'
};

axios.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios