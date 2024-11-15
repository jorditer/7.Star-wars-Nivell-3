import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {

	return (
   <div className="flex flex-col h-screen">
    <Header />
    <Navbar />
		<Outlet />
   </div> 
	)
}

export default Layout;