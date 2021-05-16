
import './App.css';

import {BrowserRouter, Link, Route} from 'react-router-dom'
import ProductPage from './clientpage/ProductPage';
import HomePage from './clientpage/HomePage';
import CartScreen from './clientpage/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import SiginInPage from './clientpage/SignInScreen';
import RegisterPage from './clientpage/RegisterPage';
import { signout } from './action/userAction';
import CategoryPage from './AdminPage/CategoryPage';

function App() {



  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const dispatch = useDispatch()
  const signoutHandaler =() =>{
    dispatch(signout());

  }






  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="row header-row">
              <div class="nav-left" >
                
                <Link className="brand" to='/'>Shop</Link>
                
              </div>
              
            
              <div>
                <div className='dropdown'>
                    <Link to="#">
                      Select District { '  '}
                      <i className='fa fa-caret-down'></i>
                    </Link>
                    <ul className="dropdown-content">
                      <li className=" dropdown-one">
                        <Link to="/" >Signout
                          <i className='fa fa-caret-right' style={{float:'right'}}></i>
                        </Link>
                        
                        <div className="dropdown-content-one">
                          <div><Link to='/profile' >bibash</Link></div>
                          <div>  <Link to="/setting" >poudel</Link></div>
                        </div>
                      </li>
                      <hr></hr>
                      <li><Link to='/profile' >Profile</Link></li>
                      <hr></hr>
                      <li>  <Link to="/setting" >setting</Link></li>
                      <hr></hr>
                    
                    </ul>  
                  </div>

                <Link to="/cart">cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                    )
                  }
                </Link>
                {
                  userInfo ? (
                    <span className="dropdown">
                      <Link to="#">
                        {userInfo.name} {' '}
                        <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                            <Link to="#signout  " onClick={signoutHandaler}>sign out</Link>
                        </li>
                      </ul>
                    </span>
                  )
                  :
                  (
                    <Link to="/signin">sign in</Link>
                  )
                }
              </div>
            </div>
            <div className="nav-search">
              <input  className="search" type="text" placeholder="search"></input>
              <span className="btn-search"><i className="fa fa-search"></i></span>
            </div>
            <div id="nav-scroll" className="nav-menu-item">
              {/* <span className="nav-menu" 
                style={{color:'#fff'}}
                onClick={() => setSidebarIsOpen(true)}
              >

              &#9776;  */}
              
              <button
                  type="button"
                  className="open-sidebar"
                  onClick={() => setSidebarIsOpen(true)}
                >
                  <i className="fa fa-bars"></i>
                </button> ALL
                 
              <a href="todaysdeal.html"> Today's Deals</a>
              <a href="customerservice.html"> Customer Service</a>
              <a href="gifts.html"> Gift </a>
              <a href="sell.html"> Sell</a>
              <a href="gifts.html"> Gift </a>
              <a href="sell.html"> Sell</a>
              <a href="gifts.html"> Gift </a>
              <a href="sell.html"> Sell</a>
              <a href="gifts.html"> Gift </a>
              <a href="sell.html"> Sell</a>
             
            </div>
              
          </header>
          <aside className={sidebarIsOpen ? 'open' : ''}>
            <div className="aside-top">
              {
                userInfo ? (
                    <Link to="#">
                      {userInfo.name}
                    </Link>
                  
                )
                :
                <div>

                </div>
                
              }
            </div>
            <ul className="categories">
              <li>
                <strong>Categories</strong>
                <button
                  onClick={() => setSidebarIsOpen(false)}
                  className="close-sidebar"
                  type="button"
                >
                  <i className="fa fa-close"></i>
                </button>
              </li>
            </ul>

          </aside>
          <main >
            {/* for admin */}

            <Route path='/admin/add_Category' component={CategoryPage} ></Route>

            {/* for client page */}
            <Route path='/cart/:id?' component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path='/signin' component={SiginInPage}></Route>
            <Route path='/register' component={RegisterPage}></Route>
            <Route path="/" component={HomePage} exact></Route>
              <div >
                
              </div>    
          </main>
          <footer >
            <div className=" sub-footer">
              <div className="column1">
               
                <h2> Know Us</h2>
              
              
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
              </div>
              <div className="column1">
                <div>
                   <h2> Make A Money With us</h2>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div >                   
                  </div>
                  
                </div>
              <div className="column1">
                <div>
                  <h2> Let help You</h2>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  </div>
                
              </div>

            </div>
             <div className="main-footer row center">
              All Right Reserved 
             </div>

          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
