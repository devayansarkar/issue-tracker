import axios from 'axios';

const securedConnection = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const openConnection = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

securedConnection.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    ...config.headers,
    'X-CSRF-TOKEN': localStorage.csrf,
  };
  return config;
});

securedConnection.interceptors.response.use(null, (error) => {
  if (error.respons && error.response.config && error.response.status === 401) {
    return openConnection.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': localStorage.csrf } })
      .then((response) => {
        localStorage.csrf = response.data.csrf;
        localStorage.signedIn = true;

        const retryConfig = error.response.config;
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf;
        return openConnection.request(retryConfig);
      })
      .catch((exception) => {
        delete localStorage.csrf;
        delete localStorage.signedIn;

        // eslint-disable-next-line no-restricted-globals
        location.replace('/');
        return Promise.reject(exception);
      });
  }
  return Promise.reject(error);
});

export { securedConnection, openConnection };
