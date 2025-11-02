import React, { useState } from 'react';
import './App.css';
import LoginPage from './login';
import OrderPage from './OrderPage';
import DeliveryPage from './DeliveryPage';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  const [meat, setMeat] = useState(1);
  const [salad, setSalad] = useState(1);
  const [tomato, setTomato] = useState(1);
  const [cheese, setCheese] = useState(1);

const burgerPrices = {
  meat: 2.5,
  salad: 1.0,
  tomato: 0.75,
  cheese: 1.5
};

const BasePrice = 3.0;

const Price = (BasePrice + (meat * burgerPrices.meat) + (salad * burgerPrices.salad) + (tomato * burgerPrices.tomato) + (cheese * burgerPrices.cheese)).toFixed(2);  

  const addMeat = () => setMeat(meat + 1);
  const removeMeat = () => { if (meat > 0) setMeat(meat - 1); };
  const addSalad = () => setSalad(salad + 1);
  const removeSalad = () => { if (salad > 0) setSalad(salad - 1); };
  const addTomato = () => setTomato(tomato + 1);
  const removeTomato = () => { if (tomato > 0) setTomato(tomato - 1); };
  const addCheese = () => setCheese(cheese + 1);
  const removeCheese = () => { if (cheese > 0) setCheese(cheese - 1); };

  return (
    <div className="App">
      <title>Khaan Burger</title>
      <header className="App-header">
        <h1>Welcome to Khaan Burger!</h1>
      </header>
      <section id ="burgerbuilder">
        <div className='burger'>
          <div className='topbun'>
            <div className='seed1'></div>
            <div className='seed2'></div>
            <div className='seed3'></div>
          </div>
          <div>
            {[...Array(salad)].map((_, i) => <div key={i} className='salad'></div>)}
          </div>
          <div>
            {[...Array(tomato)].map((_, i) => <div key={i} className='tomato'></div>)}
          </div>
          <div>
            {[...Array(cheese)].map((_, i) => <div key={i} className='cheese'></div>)}
          </div>
          <div>
            {[...Array(meat)].map((_, i) => <div key={i} className='patty'></div>)}
          </div>
          <div className='bottombun'></div>
        </div>
      
      
      <div className='buildcontrols'>
        <h3>
          Hamburger Builder
        </h3>
        <span><section id='controlText'>Meat: {meat}</section>  
          <button onClick={addMeat}>Add</button>
          <button onClick={removeMeat} disabled={meat === 0}>Remove</button>
        </span>
        <span><section id='controlText'>Salad: {salad} </section>
          <button onClick={addSalad}>Add</button>
          <button onClick={removeSalad} disabled={salad === 0}>Remove</button>
        </span>
        <span><section id='controlText'>Tomato: {tomato} </section>
          <button onClick={addTomato}>Add </button>
          <button onClick={removeTomato} disabled={tomato === 0}>Remove</button>
        </span>
        <span><section id='controlText'>Cheese: {cheese} </section>
          <button onClick={addCheese}>Add</button>
          <button onClick={removeCheese} disabled={cheese === 0}>Remove</button>
        </span>
        <div className='totalprice'>Total price: {Price}</div>
        <Link to="/order" state={{ meat, salad, tomato, cheese, totalPrice: Price }}>
          <button className="order-button">
            ORDER NOW
          </button>
        </Link>
      </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
