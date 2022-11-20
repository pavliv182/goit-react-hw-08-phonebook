import { instance } from 'shared/services/auth/API';

const setToken = () => {
  const allLocalStorage = JSON.parse(localStorage.getItem('persist:root'));
  const token = JSON.parse(allLocalStorage.auth).token;

  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetch = async () => {
  setToken();
  const { data } = await instance.get('/contacts');
  return data;
};

export const addNewContact = async contact => {
  setToken();
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const removeNewContact = async id => {
  setToken();
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
