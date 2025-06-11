import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />
      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div id="dashboard-orders" className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <div id="orders-icon" className="bg-[#00B074] text-white p-3 rounded-full">
            <FaShoppingCart />
          </div>
          <div id="orders-info">
            <div id="orders-count" className="text-black text-left text-2xl font-bold">75</div>
            <div id="orders-text" className="text-gray-500 text-sm">Total Orders</div>
          </div>
        </div>

        <div id="dashboard-delivered" className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <div id="delivered-icon" className="bg-blue-400 text-white p-3 rounded-full">
            <FaTruck />
          </div>
          <div id="delivered-info">
            <div id="delivered-count" className="text-black text-left text-2xl font-bold">175</div>
            <div id="delivered-text" className="text-gray-400 text-sm">Total Delivered</div>
          </div>
        </div>

        <div id="dashboard-canceled" className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <div id="canceled-icon" className="bg-red-400 text-white p-3 rounded-full">
            <FaBan />
          </div>
          <div id="canceled-info">
            <div id="canceled-count" className="text-black text-left text-2xl font-bold">40</div>
            <div id="canceled-text" className="text-gray-400 text-sm">Total Canceled</div>
          </div>
        </div>

        <div id="dashboard-revenue" className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
          <div id="revenue-icon" className="bg-yellow-400 text-white p-3 rounded-full">
            <FaDollarSign />
          </div>
          <div id="revenue-info">
            <div id="revenue-amount" className="text-black text-left text-2xl font-bold">Rp.128</div>
            <div id="revenue-text" className="text-gray-400 text-sm">Total Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
