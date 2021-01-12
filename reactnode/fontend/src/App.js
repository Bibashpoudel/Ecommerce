
import './App.css';
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


                    <div key={product._id} className="card">
                    
                      <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt ={product.name}></img>
                      </a>
                      <div className="card-body">
                        <div className="product-name">
                          <a href={`/product/${product._id}`}>
                              <h2 >
                                {product.name}
                              </h2>
                          </a>
                        </div>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            Price: {product.price}
                        </div>
                    </div>
                  </div>

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
