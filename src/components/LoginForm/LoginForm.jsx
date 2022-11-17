import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginForm({ userLogin, loginSuccess }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    userLogin(data);
    loginSuccess();
    navigate('/');
  };

  const { email, password } = data;

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
