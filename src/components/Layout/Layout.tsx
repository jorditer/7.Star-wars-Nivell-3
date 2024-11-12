import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {

	return (
   <div className="">
    <Header />
    <Navbar />
		<Outlet />
   </div> 
	)
}

export default Layout;