import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'http://159.89.186.143';

const api = axios.create({
  baseURL: 'http://159.89.186.143',
});

export default api;
