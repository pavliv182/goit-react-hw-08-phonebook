import { Navigate, Outlet } from 'react-router-dom';

import useUserLogin from 'shared/hooks/useUserLogin';

const PrivateRoute = () => {
  const isLogin = useUserLogin();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
