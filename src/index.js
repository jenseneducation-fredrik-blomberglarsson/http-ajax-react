import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Default configuration - will be used application wide
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //default

axios.interceptors.request.use(request => { // request config
  console.log(request);
  // Edit request config
  return request; // need to always return the request/request config otherwise the request is blocked
}, error => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  console.log(response);
  //Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
