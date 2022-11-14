import { Routes, Route } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage';

import useUserLogin from 'shared/services/hooks/useUserLogin';

function MyRoutes() {
  const isLogin = useUserLogin();

  return (
    <Routes>
      {isLogin ? (
        <Route path="/" element={<ContactsPage />} />
      ) : (
        <Route path="/" element={<HomePage />} />
      )}

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MyRoutes;
