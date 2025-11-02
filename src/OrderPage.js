import React from 'react';
import { useLocation, Link, Route, Routes } from 'react-router-dom';
import DeliveryPage from './DeliveryPage';
import Home from './App';

function OrderPage() {
const location = useLocation();
const { meat, salad, tomato, cheese, totalPrice } = location.state || {};

    return (
        <div className="order-page">
            <h2>Your Order Details</h2>
            <div className="order-summary">
                <h3>Ingredients:</h3>
                <ul>
                    <li><p>Meat:</p> <p>{meat || 0} patties</p></li>
                    <li><p>Salad:</p> <p>{salad || 0} portions</p></li>
                    <li><p>Tomato:</p> <p>{tomato || 0} slices</p></li>
                    <li><p>Cheese:</p> <p>{cheese || 0} slices</p></li>
                </ul>
                <div className="total">
                    <h3>Total Price: ${totalPrice || 0}</h3>
                </div>
                <Link to="/delivery" state={{ meat, salad, tomato, cheese, totalPrice }} >
                    <button className="confirm-order">
                        CONFIRM ORDER
                    </button>
                </Link>
                <Routes>
                    <Route path="/delivery" element={<DeliveryPage />} />
                    
                </Routes>
            </div>
        </div>
    );
}

export default OrderPage;