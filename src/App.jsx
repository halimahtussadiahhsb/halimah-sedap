import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCustomerList from './classCustomerList'
import FunctionalCustomerList from './FunctionalCustomerList';
import FlexItems from './FlexItems'
import Sidebar from './Pertemuan5/layouts/Sidebar'
import Dashboard from './Pertemuan5/pages/Dashboard'
import Header from './Pertemuan5/layouts/Header'
import { NavLink } from 'react-router-dom'
import Users from './pages/Users'
import Products from './pages/Products'
import UserProfile from './pages/UsersProfile'
import UserSettings from './pages/UserSettings'
import ProductsDetail from './pages/ProductsDetail'
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import DashBoard from './component/Dashboard'
import Order from './Pertemuan5/layouts/Order'
import Customer from './Pertemuan5/layouts/Customer'

function App() {
const [count, setCount] = useState(0)
const [title, setTitle] = useState("Vite + React")

  let angka = 10
  angka = 20
  console.log(angka)


  const pi =3.14
  //console.log(pi)
  console.log(pi)

  let x = 10
  if(true){
    let x = 20
    console.log(x)
  }
  console.log(x)
  
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com"},
    { id: 2, name: "Jane Smith", email: "jane@example.com"}
  ];
  //Menggunakan arrow function untuk mencetak daftar pelanggan
  customers.forEach(customer => console.log(`Nama : ${customer.name} - Email : ${customer.email}`));

  const customer = { id: 1, name: "John Doe", email: "john@example.com"};
  //Menggunakan destructuring
  const {name, email} = customer;
  console.log(`Pelanggan: ${name}, Email: ${email}`);

  const products = [
    { id: 1, name: "Laptop", stock: 10},
    { id: 2, name: "Smartphone", stock: 15}
  ];
  const newProduct = { id: 3, name: "Tablet", stock: 8 };
  //Menambahkan produk baru tanpa mengubah array lama
  const updatedProducts = [...products, newProduct];
  console.log(updatedProducts);

  const createOrder = (customerName = "Guest", product = "Unknown", quantity = 1) => {
    console.log(`Pesanan: ${customerName} membeli ${quantity} unit ${product}`);
  };
  //Tanpa memberikan semua parameter
  createOrder("John Doe", "Laptop", 2);
  createOrder("Jane Smith", "Smartphone"); //Default Quantity = 1
  createOrder(); //Semua menggunakan default

  const invoice = (customer, product, quantity, price) => {
    return `
    ====================
          INVOICE
    ====================   
    Nama Pelanggan: ${customer}
    Produk: ${product}
    Jumlah: ${quantity}
    Harga Satuan: ${price}
    Total Bayar: Rp ${quantity * price}
    ====================  
    `
      ;
  };
  console.log(invoice("John Doe", "Laptop", 2, 500));

  const getCustomers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["John Doe", "Jane Smith", "Robert Brown"]);
      }, 2000); //Simulasi delay 2 detik
    });
  };
  getCustomers().then(customers => console.log("Pelanggan:", customers));

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log("Daftar Produk:", data);
    } catch (error){
      console.error("Error fetching products:", error);
    }
  };
  fetchProducts();

  // return (
  //   <Router>
  //     <div className="flex h-screen">
  //       {/* Sidebar */}
  //       <Sidebar />

  //       <div className="flex-1 flex flex-col">
  //         {/* Header */}
  //         <Header />

  //         <div className="p-4">
  //           <Routes>
  //             <Route path="/" element={<Dashboard />} />
              
  //             <Route path="/users" element={<Users />}>
  //               <Route path="profile" element={<UserProfile />} />
  //               <Route path="settings" element={<UserSettings />} />
  //             </Route>

  //             <Route path="/login" element={<Login />} />
  //             <Route path="/" element={<Navigate to="/Dashboard" />} />
  //             {/* <Route path="*" element={<h1 className="p-4 text-red-500">404 - Page Not Found</h1>} /> */}

  //             <Route path="/products/:id" element={<ProductsDetail />} />
  //             <Route path="/products" element={<Products />} />

  //             <Route path="/404" element={<NotFound />} />
  //             <Route path="*" element={<NotFound />} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>
  //   </Router>
  // );
  // return (
  //   <Router>
  //     <div className="flex h-screen">
  //       {/* Sidebar */}
  //       <Sidebar />
        
  //       <div className="flex-1 flex flex-col">
  //         {/* Header */}
  //         <Header />
          
  //         <main className="flex-1 bg-gray-100 min-h-screen p-4">
  //           <Routes>
  //             <Route path="/" element={<Dashboard />} />
              
  //             <Route path="/order" element={<Order />}>
  //              
  //             </Route>

  //             <Route path="/customer" element={<Customer />}>
  //           
  //             </Route>

  //             <Route path="*" element={<NotFound />} />
  //           </Routes>
  //         </main>
  //       </div>
  //     </div>
  //   </Router>
  // );
}

export default App

