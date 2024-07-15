import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Error from "./components/error/Error"
import Footer from './components/footer/Footer';
import NavBar from './components/nav-bar/NavBar';
import HomePage from './view/home-page/HomePage';
import LoginPage from './view/login-page/LoginPage';
import RegisterPage from './view/register-page/RegisterPage';
import ForgotPasswordPage from './view/forgot-password-page/ForgotPasswordPage';
import LandingPage from './view/landing-page/LandingPage';
import NotFoundPage from './view/not-found-page/NotFoundPage';
import UpdateProjectPage from './view/update-project-page/UpdateProjectPage';
import UsersPage from './view/users-page/UsersPage';
import CreateProjectPage from './view/create-project-page/CreateFormPage';
import useAuth0TokenHandler from './hooks/useAuth0TokenHandler';
import ProjectDetailPage from './view/project-detail-page/ProjectDetailPage';

function App() {
  const { isLoading } = useAuth0();

  // Asegúrate de que este hook se llame siempre en cada renderizado
  useAuth0TokenHandler();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <Error />
        <NavBar />
        <Routes className="App">
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateProjectPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/modProject" element={<UpdateProjectPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
