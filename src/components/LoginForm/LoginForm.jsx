import { useState } from 'react';

function LoginForm({ userLogin }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { password: '666qwe666', email: 'pasha666@gmail.com' };
    userLogin(user);
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
