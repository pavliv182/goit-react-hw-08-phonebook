import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

const setToken = () => {
  const allLocalStorage = JSON.parse(localStorage.getItem('persist:root'));
  const token = JSON.parse(allLocalStorage.auth).token;

  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
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

export const getCurrent = async token => {
  addToken(token);
  try {
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

// CONTACTS

export const fetch = async () => {
  setToken();
  const { data } = await instance.get('/contacts');
  return data;
};

export const addNewContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const removeNewContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
