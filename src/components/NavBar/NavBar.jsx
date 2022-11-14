import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useCallback } from 'react';
import { logout } from 'redux/auth/auth-operations';
// const getActiveLink = ({ isActive }) => {
//   return isActive ? ${s.link} ${s.active} : ${s.link};
// };

import { Outlet } from 'react-router-dom';

function NavBar() {
  const isLogin = useSelector(store => store.auth.isLogin);
  const userName = useSelector(store => store.auth.user.name);

  const dispatch = useDispatch();

  const userLogout = useCallback(() => {
    dispatch(logout());
    Notify.info('Logout is done');
  }, [dispatch]);

  //   const notification = () => Notify.success('Login is successful');
  // {
  //   notification();
  // }
  return (
    <>
      {!isLogin ? (
        <div style={{ height: 50, backgroundColor: '#eee' }}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      ) : (
        <div style={{ height: 50, backgroundColor: '#eee' }}>
          <p>{userName}</p>
          <button type="button" onClick={userLogout}>
            Logout
          </button>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default NavBar;
