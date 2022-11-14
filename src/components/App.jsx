import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import Notification from './Notification';
import MyRoutes from 'MyRoutes';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const isLogin = useSelector(store => store.auth.isLogin);

  // const user = { password: '666qwe666', email: 'pasha666@gmail.com' };

  return (
    <>
      <NavBar />
      {isLogin && (
        <>
          {/* <Section title="Phonebook">
            <Phonebook />
          </Section> */}
        </>
      )}
      <MyRoutes />
    </>
  );
};
