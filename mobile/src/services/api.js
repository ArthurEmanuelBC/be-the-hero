import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.29.240.48:3333/'
});

export default api;