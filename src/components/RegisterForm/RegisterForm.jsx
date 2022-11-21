import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

function RegisterForm({ userSignup }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.length || !password.length || !name.length) {
      Notify.failure('Missing name, email or password');
      return;
    }
    userSignup(data);
  };

  const { name, email, password } = data;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;

RegisterForm.propTypes = {
  userSignup: PropTypes.func.isRequired,
};
