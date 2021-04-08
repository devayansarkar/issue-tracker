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
  config.headers.Authorization = `Bearer ${localStorage.access_token}`;
  return config;
});

securedConnection.interceptors.response.use(null, (error) => {
  if (error.response && error.response.config && error.response.status === 401) {
    return openConnection.post('/refresh', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
        x_refresh_token: `Bearer ${localStorage.refresh_token}`,
      },
    })
      .then((response) => {
        const token = response.data;
        localStorage.access_token = token.access_token;
        localStorage.refresh_token = token.refresh;
        localStorage.access_expires_at = token.access_expires_at;
        localStorage.refresh_token_expires_at = token.refresh_expires_at;

        const retryConfig = error.response.config;
        retryConfig.headers.Authorization = `Bearer ${localStorage.access_token}`;
        return openConnection.request(retryConfig);
      })
      .catch((exception) => {
        delete localStorage.access_token;
        delete localStorage.refresh_token;

        // eslint-disable-next-line no-restricted-globals
        if (location.pathname !== '/') {
          // eslint-disable-next-line no-restricted-globals
          location.replace('/');
        }
        return Promise.reject(exception);
      });
  }
  return Promise.reject(error);
});

export { securedConnection, openConnection };
