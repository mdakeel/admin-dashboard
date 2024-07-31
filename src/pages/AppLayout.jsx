import { Outlet } from "react-router-dom";
import Sidebar from "../components/commen/Sidebar";
import Header from "../components/commen/Header";

function AppLayout() {
	return (
		<div className="w-full flex">
			<div className='w-1/6'>
        <Sidebar />
        </div>
			<div className="w-5/6">
        <Header />
				<Outlet />
			</div>
		</div>
	);
}

export default AppLayout;
