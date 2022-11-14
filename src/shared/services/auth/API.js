import axios from 'axios';

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
