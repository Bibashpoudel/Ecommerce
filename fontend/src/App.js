
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'
import ProductPage from './clientpage/ProductPage';
import HomePage from './clientpage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div >
                  <a className="brand" href="index.html">Shop</a>
              </div>
              <div className="search-box">
                <span>drop</span>
                <input type="text">
                </input>
                <span className="search-button">search</span>
              </div>
              <div>
                  <a href="cart.html">cart</a>
                  <a href="signin.html">sign in</a>
              </div>
              
          </header>
          <subheader className="row">
            <div>
                  <a href="todaysdeal.html"> Today's Deals</a>
                  <a href="customerservice.html"> Customer Service</a>
                  <a href="gifts.html"> Gift </a>
                  <a href="sell.html"> Sell</a>

            </div>
          </subheader>
          <main >
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path="/" component={HomePage} exact></Route>
              <div >
                
              </div>    
          </main>
          <footer className="row center">
            <div class=" sub-footer">

            </div>
              All Right Reserved 

          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
