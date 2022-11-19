import MyRoutes from 'MyRoutes';
import NavBar from './NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <MyRoutes />
    </>
  );
};
