import { BiUser } from "react-icons/bi"; 
import { MdDashboard, MdHeadphones } from 'react-icons/md';
import { AiOutlineUnorderedList } from "react-icons/ai"; 
import { RiCustomerServiceFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

export default function Sidebar() {
  const baseClass = "flex items-center cursor-pointer rounded-xl p-4 font-medium text-gray-600";
  const activeClass = "bg-[#00B074] text-white font-semibold";

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
          Sedap <b id="logo-dot" className="text-[#00B074]">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu List */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#00B07426] hover:text-[#00B074]"}`
              }
            >
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#00B07426] hover:text-[#00B074]"}`
              }
            >
              <AiOutlineUnorderedList className="mr-4 text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customer"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#00B07426] hover:text-[#00B074]"}`
              }
            >
              <RiCustomerServiceFill className="mr-4 text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) => 
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#00B07426] hover:text-[#00B074]"}` 
              }
            >
              <BiUser className="mr-4 text-xl" />
              <span>User</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => 
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#00B07426] hover:text-[#00B074]"}` 
              }
            >
              <FiLogIn className="mr-4 text-xl" />
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-[#00B074] px-4 py-2 rounded-md shadow-lg mb-10 flex items-center justify-between">
          <div id="footer-text" className="text-white text-sm text-left">
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md text-gray-600 text-sm cursor-pointer hover:bg-gray-200">
              <span>+ Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Rights Reserved</p>
      </div>
    </div>
  );
}
