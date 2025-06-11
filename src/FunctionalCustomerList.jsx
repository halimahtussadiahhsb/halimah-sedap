import React, { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";

const FunctionalCustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers([
            { id: 1, name: "Alice Jonshon", email: "alice@example.com" },
            { id: 2, name: "Bob Williams", email: "bob@example.com" },
            { id: 3, name: "Halimah Tussa'Diah", email: "halimah@example.com" },
            { id: 4, name: "Ginta Sabil Ramadhani", email: "ginta@example.com" }
        ]);
    }, []);

    return (
        <div>
            <h2>Customer List (Functional component)</h2>
            {customers.map(customer => {
                const warna = customer.id % 2 !== 0 ? "white" : "red";  
                
                return (
                    <CustomerCard key={customer.id} customer={customer} warna={warna}  
                    />
                );
            })}
        </div>
    );
};

export default FunctionalCustomerList;
