import axios from 'axios';
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…2Njl9.wC1DEO02PtijF5XCKhYPLsbBXV3CrwsZ8Uv_E4a6dik

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhMTU1ZDIyYmFhNTAwMTZiMTNmYWUiLCJpYXQiOjE2Njc4OTY4OTJ9.rO5TM9HYOpUZMB-mhyhvNJkC3xIejHFoeUS01EEjvJY

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…wNzB9.A5SxdWVqt99-Lvs2hLtrvC--iu4DPMsXSXcSsT51UDM

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…zNjB9.9S9PgC6u6_tUIuLeeCOOlJxNvhs6jIzH7eIY--_DK-s
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async user => {
  const { data } = await instance.post('/users/signup', user);
  addToken(data.token);

  return data;
};

export const login = async user => {
  const { data } = await instance.post('/users/login', user);
  addToken(data.token);

  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  removeToken();
};

// export const getCurrentUser = async token => {
//   addToken(token);
//   const data = await instance.get('/users/current');

//   return data;
// };
