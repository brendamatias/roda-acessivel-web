import axios from 'axios';

const api = axios.create({
  baseURL: 'https://roda-acessivel.herokuapp.com',
});

export default api;
