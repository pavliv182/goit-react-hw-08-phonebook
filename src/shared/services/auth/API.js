import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users/',
});

export const signup = async user => {
  console.log(user);
  const { data } = await instance.post('/singup', {
    user,
  });
  return data;
};
