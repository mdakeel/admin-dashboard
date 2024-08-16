import React, { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUsername = localStorage.getItem("username") || "Guest";
    const storedProfilePic =
      localStorage.getItem("profilePic") || "url/to/default/profile.png";

    setUsername(storedUsername);
    setProfilePic(storedProfilePic);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLogout = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    localStorage.removeItem("username");
    localStorage.removeItem("profilePic");
    toast.success("Logout Successfully!", {
      position: "top-center",
    });
    navigate("/login");
  };

  return (
    <div className="fixed w-full top-0 left-0  py-3 z-10  bg-white ">
      <div className="md:px-8 px-10 flex items-center justify-between">
        <div className="md:w-[270px] w-14"></div>

        <div className="md:w-[50%]  items-center justify-center gap-2 md:flex hidden">
          <div
            className={`flex items-center w-full rounded-full border ${
              isFocused ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <input
              type="search"
              className="rounded-l-full w-full py-2 px-4 outline-none bg-transparent"
              placeholder="Search data, user"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button className="bg-[#F9FAFB] py-2 px-4 rounded-r-full border hover:bg-gray-200">
              Search
            </button>
          </div>
          <div className="bg-[#F9FAFB] rounded-full p-2 hover:bg-gray-100 cursor-pointer">
            <FaRegBell size={22} />
          </div>
        </div>

        <div className="flex md:w-[25%] w-full items-center md:justify-end justify-between gap-6">
          <div className="bg-[#F9FAFB] rounded-full md:p-2 p-1 hover:bg-gray-100 cursor-pointer">
            <MdOutlineLightMode size={24} />
          </div>
          <div className="flex items-center gap-2">
            <img
              src={profilePic}
              alt="profile img"
              className="md:w-9 md:h-9 w-8 h-8 rounded-full cursor-pointer"
            />
            <p className="md:text-[19px] text-[17px] text-gray-600">
              {username}
            </p>
          </div>
          <IoMdLogOut
            onClick={handleLogout} // Call the function directly
            size={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
