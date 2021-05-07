import axios from 'axios';
import { URL } from './utilities/config';

const instance = axios.create({
  baseURL: URL,
});

export default instance;
