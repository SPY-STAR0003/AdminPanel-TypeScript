// * react
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// * pages (Routes)
import ArticlesPage from './pages/articles';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import TodosPage from './pages/todos';
import UsersPage from './pages/users';
import HomePage from './pages/home';

const App : React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/todos' element={<TodosPage />} />
      </Routes>
    </>
  );
}

export default App;
