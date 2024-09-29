import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import PasswordCreate from "./pages/PasswordCreate/PasswordCreate";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

export enum Paths {
  LOGIN = "/login",
  HOME = "/",
  SIGNUP = "/signup",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
  NOTFOUND = "/404",
}

const routes = [{ path: Paths.HOME, element: <Home /> }];

function App() {
  return (
    <ThemeWrapper>
      <Routes>
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route path={Paths.SIGNUP} element={<PasswordCreate />} />
        <Route path={Paths.DASHBOARD} element={<Dashboard />} />
        <Route element={<ProtectedRoute />}>
          <Route path={Paths.HOME} element={<Home />} />
        </Route>
      </Routes>
    </ThemeWrapper>
  );
}

export default App;
