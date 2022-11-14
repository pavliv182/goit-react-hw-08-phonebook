import { useSelector } from 'react-redux';

const useUserLogin = () => {
  const isLogin = useSelector(state => state.auth.isLogin);

  return isLogin;
};

export default useUserLogin;
