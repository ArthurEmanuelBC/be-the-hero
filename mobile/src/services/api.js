import axios from 'axios';

const api = axios.create({
  baseURL: '172.17.149.201:3333/'
});

export default api;