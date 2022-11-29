import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/auth-selectors';

const useUserLogin = () => {
  const isLogin = useSelector(getIsLogin);

  return isLogin;
};

export default useUserLogin;
