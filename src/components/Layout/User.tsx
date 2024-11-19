import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const User = () => {
	const { isUserLoggedIn, logout } = useAuth();
	
	return (
		<div className="absolute top-0 right-0 p-4 sm:p-6">
			{
				isUserLoggedIn ?
				 <Link to="/">
					<button onClick={logout} className="log">LOGOUT</button> 
				 </Link> :
					<Link to="/email">
					<h1 className="log">LOGIN</h1>
				</Link>

			}
		</div>
	);
	}

export default User;