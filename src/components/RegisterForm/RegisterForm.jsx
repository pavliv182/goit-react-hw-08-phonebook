import { useState } from 'react';

function RegisterForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const { name, email, password } = data;

  return (
    <form action="">
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
