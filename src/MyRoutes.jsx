import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage';

function MyRoutes() {
  const isLogin = useSelector(store => store.auth.isLogin);
  console.log(isLogin);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MyRoutes;
