import React from "react";

const CustomerCard = ({ customer, warna }) => {
    const cardStyle = {border: "1px solid #acc", padding: "10px", margin: "5px", backgroundColor: warna};

    return (
        <div style={cardStyle}>
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
        </div>
    );
};

export default CustomerCard;
