import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { useCallback } from 'react';
import { logout } from 'redux/auth/auth-operations';
// const getActiveLink = ({ isActive }) => {
//   return isActive ? ${s.link} ${s.active} : ${s.link};
// };
import { getUserName } from 'redux/auth/auth-selectors';

import useUserLogin from 'shared/hooks/useUserLogin';

function NavBar() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  const isLogin = useUserLogin();

  const userLogout = useCallback(() => {
    dispatch(logout());
    Notify.info('Logout is done');
  }, [dispatch]);

  return (
    <>
      {!isLogin ? (
        <div style={{ height: 50, backgroundColor: '#eee' }}>
          <NavLink to="/">Home</NavLink>
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
    </>
  );
}

export default NavBar;
