import axios from 'axios';
import config from '../config';
import { getCookie } from '../utils/cookies';

const token = () => getCookie('SPOTIFY_ACCESS_TOKEN') || undefined;

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    Authorization: `Bearer ${token()}`
  },
});

export default axiosInstance;
