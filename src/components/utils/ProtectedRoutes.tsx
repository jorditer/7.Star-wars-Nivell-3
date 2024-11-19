import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoutes = () => {
	const { isUserLoggedIn } = useAuth();
	
	console.log(isUserLoggedIn);
	return isUserLoggedIn ? <Outlet /> : <Navigate to="/email" />;
}

export default ProtectedRoutes;
