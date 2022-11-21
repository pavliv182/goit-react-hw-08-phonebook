import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

import useUserLogin from 'shared/hooks/useUserLogin';

function LoginForm({ userLogin, loginSuccess }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const isLogin = useUserLogin();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const { email, password } = data;

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.length || !password.length) {
      Notify.failure('Missing email or password');
      return;
    }
    userLogin(data);
    if (isLogin) {
      loginSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
};
