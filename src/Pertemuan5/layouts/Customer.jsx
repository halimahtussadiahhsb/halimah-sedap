import { Outlet, NavLink } from "react-router-dom";

export default function Customer() {
  return (
    <div className="p-4">
      <h1 className="text-black text-3xl font-bold mb-4">Customer Page</h1>
      <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500 text-sm">
        <span id="breadcrumb-home">Customer</span>
        <span id="breadcrumb-separator">/</span>
        <span id="breadcrumb-current">Customer Support</span>
      </div>

      
      <NavLink to="customersupport" className="text-[#00B074] underline mt-2 block">
        Go to Customer Support
      </NavLink>

      <Outlet /> 
    </div>
  );
}
