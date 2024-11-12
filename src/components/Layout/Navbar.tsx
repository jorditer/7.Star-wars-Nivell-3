import { Link } from "react-router-dom"

const Navbar = () => {

	return (
		<>
			<div className="flex border-y-2  justify-center">
				<Link to="/" className="text-white p-2 px-4 border-r-2 border-s-2">HOME</Link>
				<Link to="/starships" className="text-white p-2 px-4 border-e-2">SPACESHIPS</Link>
			</div>
		</>
	)
}

export default Navbar