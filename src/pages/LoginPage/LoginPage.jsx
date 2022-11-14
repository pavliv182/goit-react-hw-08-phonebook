import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import LoginForm from 'components/LoginForm';
import Section from 'components/Section';

import { login } from 'redux/auth/auth-operations';

function LoginPage() {
  const dispatch = useDispatch();
  const notification = () => Notify.success('Login is successful');

  const userLogin = data => {
    dispatch(login(data));
  };

  return (
    <Section title="Enter your Login Info">
      <LoginForm userLogin={userLogin} loginSuccess={notification} />
    </Section>
  );
}

export default LoginPage;
