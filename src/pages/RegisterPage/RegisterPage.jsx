import { useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm';
import Section from 'components/Section';

import { signup } from 'redux/auth/auth-operations';

function RegisterPage() {
  const dispatch = useDispatch();
  
  const userSignup = data => {
    dispatch(signup(data));
  };

  return (
    <Section title="Enter your Registration Info">
      <RegisterForm userSignup={userSignup} />
    </Section>
  );
}

export default RegisterPage;
