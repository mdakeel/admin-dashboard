import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/commen/Sidebar";
import Header from "../components/commen/Header";

function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth < 1280) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
     
      <div className="flex ">
        <div className={`transition-all  duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-[270px]'}`}>
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </div>
        <div className="xl:w-5/6 w-full bg-[#F9FAFB] md:pt-[72px] pt-[60px]  min-h-screen">
		     <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
