import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://forkify-api.herokuapp.com/api/v2/',
});

export default instance;
