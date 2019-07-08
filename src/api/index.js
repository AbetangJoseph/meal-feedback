const BASE_URL = 'https://demo3266234.mockable.io/';

const http = {
  post: (path, payload) => {
    return fetch(BASE_URL + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .catch(error => ({ error: error.message }));
  },
  get: (path) => {
    return fetch(BASE_URL + path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => ({ error: error.message }));
  }
};

export default http;
