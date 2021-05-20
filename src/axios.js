import axios from 'axios';
import { URL } from './shared/utilities/config';

const instance = axios.create({
  baseURL: URL,
});

export default instance;
