
import './App.css';
import Product from './components/Products';
import data from './data';

function App() {
  return (
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
            <div >
              <div className="row center">
                {
                  data.products.map((product)=>(


                    <Product key={product._id} product={product}></Product>

                  ))
                }
              </div>
            </div>    
        </main>
        <footer className="row center">
            All Right Reserved 

        </footer>
    </div>
  );
}

export default App;
