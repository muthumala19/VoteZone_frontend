import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import { Paths } from '../../App';
import LoadingComponent from '../Loading/Loading';

export default function ProtectedRoute(_children) {
  const user = useAppSelector((state) => state.user);

  if (user.role) {
    return <Outlet />;
  } else {
    if (user.loginError) {
      return <Navigate to={Paths.LOGIN} />;
    }
    return <LoadingComponent />;
  }
}
