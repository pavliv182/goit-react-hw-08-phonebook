import { Navigate, Outlet } from 'react-router-dom';

import useUserLogin from 'shared/hooks/useUserLogin';

const PublicRoute = () => {
  const isLogin = useUserLogin();

  if (isLogin) {
    return <Navigate replace to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
