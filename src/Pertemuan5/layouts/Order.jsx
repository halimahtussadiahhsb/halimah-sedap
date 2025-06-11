import { Outlet, NavLink } from "react-router-dom";

export default function Order() {
  return (
    <div className="p-4">
      <h1 className="text-black text-3xl font-bold mb-4">Order Page</h1>
      <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500 text-sm">
      <span id="breadcrumb-home">Order</span>
        <span id="breadcrumb-separator">/</span>
        <span id="breadcrumb-current">Order History</span>
      </div>

      <NavLink to="orderhistory" className="text-[#00B074] underline">
        Go to Order History
      </NavLink>
      <Outlet /> 
    </div>
  );
}
