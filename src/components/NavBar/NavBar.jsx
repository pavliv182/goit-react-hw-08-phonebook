import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const getActiveLink = ({ isActive }) => {
//   return isActive ? ${s.link} ${s.active} : ${s.link};
// };

function NavBar() {
  const isLogin = useSelector(store => store.auth.isLogin);
  const userName = useSelector(store => store.auth.user.name);
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
          <button>Logout</button>
        </div>
      )}
    </>
  );
}

export default NavBar;
