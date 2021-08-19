import Cookies from 'js-cookie';

export const getCookie = (key) => {
  const cookie = Cookies.get(key);
  return cookie ? encodeURIComponent(Cookies.get(key)) : undefined;
};

export const setCookie = (key, value) => {
  Cookies.set(key, value);
};

export const deleteCookie = (key) => {
  Cookies.remove(key);
};
