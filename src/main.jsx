import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pertemuan5/pages/Dashboard.jsx';
// const Dashboard = React.lazy(() => import("./pages/Dashboard"))
import Order from './Pertemuan5/layouts/Order.jsx'; 
import Customer from './Pertemuan5/layouts/Customer.jsx';  
import NotFound from './Pertemuan5/layouts/NotFound.jsx'; 
import Unauthorized from './Pertemuan5/layouts/Unauthorized.jsx'; 
import CustomerSupport from './Pertemuan5/layouts/CustomerSupport.jsx';
import OrderHistory from './Pertemuan5/layouts/OrderHistory.jsx';
import MainLayout from './Pertemuan5/layouts/MainLayout.jsx';
import Login from './Pertemuan5/pages/auth/Login.jsx';
import AuthLayout from './Pertemuan5/layouts/AuthLayout.jsx';
import Register from './Pertemuan5/pages/auth/Register.jsx';
import Forgot from './Pertemuan5/pages/auth/Forgot.jsx';
import Loading from './Pertemuan5/components/Loading.jsx';
import UserPage from './Pertemuan5/layouts/UserPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="user" element={<UserPage />} /> 
        
                    <Route path="/order" element={<Order />}>
                        <Route path="orderhistory" element={<OrderHistory/>} />
                    </Route>
                    <Route path="/customer" element={<Customer />}>
                        <Route path="customersupport" element={<CustomerSupport />} />
                    </Route>
              </Route>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/unauthorized" element={<Unauthorized />} />
              <Route element={<AuthLayout/>}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/forgot" element={<Forgot/>} />
              </Route>
            </Routes>
        </Suspense>
    </Router>
  </StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));