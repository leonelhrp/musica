import axios from 'axios'
import qs from 'qs';
import config from '../config';
import { setCookie } from '../utils/cookies';

export const callUserAuth = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: config.api.clientId,
      password: config.api.clientSecret,
    },
  };

  const params = {
    grant_type: 'client_credentials',
  };

  try {
    const { data } = await axios.post(
      config.api.authUrl,
      qs.stringify(params),
      headers
    );

    setCookie('SPOTIFY_ACCESS_TOKEN', data.access_token);
    setCookie('SPOTIFY_EXPIRES_IN', data.expires_in);
    setCookie('SPOTIFY_TOKEN_TYPE', data.token_type);

    return data;
  } catch (error) {
    console.log(error);
  }
};