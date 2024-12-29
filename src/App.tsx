import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PasswordCreate from './pages/PasswordCreate/PasswordCreate';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ThemeWrapper from './components/ThemeWrapper/ThemeWrapper';
import ElectionDetails from './pages/EventDetails/EventDetails';
import Reports from './pages/Reports/Reports';

export enum Paths {
  LOGIN = '/login',
  HOME = '/',
  SIGNUP = '/signup',
  REGISTER = '/register',
  DASHBOARD = '/dashboard',
  REPORTS = '/dashboard/reports',
  NOTFOUND = '/404',
}

function App() {
  return (
    <ThemeWrapper>
      <Routes>
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route path={Paths.SIGNUP} element={<PasswordCreate />} />
        <Route path={Paths.DASHBOARD} element={<ElectionDetails />} />
        <Route path={Paths.REPORTS} element={<Reports />} />
        <Route element={<ProtectedRoute />}>
          <Route path={Paths.HOME} element={<Home />} />
        </Route>
      </Routes>
    </ThemeWrapper>
  );
}

export default App;
