import { useDispatch } from 'react-redux';
import LoginForm from 'components/LoginForm';
import Section from 'components/Section';
import { login } from 'redux/auth/auth-operations';

function LoginPage() {
  const dispatch = useDispatch();
  const userLogin = data => {
    dispatch(login(data));
  };

  return (
    <Section title="Enter your Login Info">
      <LoginForm userLogin={userLogin} />
    </Section>
  );
}

export default LoginPage;
