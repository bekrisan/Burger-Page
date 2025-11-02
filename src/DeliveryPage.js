import { useLocation, Link } from "react-router-dom";
import OrderPage from "./OrderPage";

export default function DeliveryPage() {
  const location = useLocation();
  const {
    meat,
    salad,
    tomato,
    cheese,
    totalPrice: Price,
  } = location.state || {};

  return (
    <div className="order-page">
      <h2>Delivery in time</h2>
      <div className="order-summary">
        <h3>Ingredients:</h3>
        <ul>
          <li>
            <p>Meat:</p> <p>{meat || 0} patties</p>
          </li>
          <li>
            <p>Salad:</p> <p>{salad || 0} portions</p>
          </li>
          <li>
            <p>Tomato:</p> <p>{tomato || 0} slices</p>
          </li>
          <li>
            <p>Cheese:</p> <p>{cheese || 0} slices</p>
          </li>
        </ul>
        <div className="total">
          <h3>Total Price: $10</h3>
        </div>
        <Link to="/order" element={<OrderPage />}>
        <button className="delivery-back-button">BACK</button>
        </Link>
      </div>
    </div>
  );
}
