import { FaUser, FaBox, FaDollarSign } from "react-icons/fa";
import ProductCard from "./ProductCard";

export default function DashBoard() {
    return(
        <div className="grid grid-cols-3 gap-4">
           <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center">
            <FaUser className="text-4x1 mr-4" />
            <div>
                <p className="text-xl font-bold">98</p>
                <p className="text-sm">Total Users</p>
            </div>
            </div> 
            <div className="bg-green-500 text-white p-4 rounded-lg flex items-center">
            <FaBox className="text-4x1 mr-4" />
            <div>
                <p className="text-xl font-bold">50</p>
                <p className="text-sm">Products</p>
                </div>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg flex items-center">
            <FaDollarSign className="text-4x1 mr-4" />
            <div>
                <p className="text-xl font-bold">$10,000</p>
                <p className="text-sm">Revenue</p>
                </div>
            </div>  
            <ProductCard/>
        </div>
    );
}