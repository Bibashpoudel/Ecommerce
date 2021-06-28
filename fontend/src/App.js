
import './App.css';

import {BrowserRouter, Link, Route} from 'react-router-dom'
import ProductPage from './clientpage/ProductPage';
import HomePage from './clientpage/HomePage';
import CartScreen from './clientpage/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SiginInPage from './clientpage/SignInScreen';
import RegisterPage from './clientpage/RegisterPage';
import { signout } from './action/userAction';
import CategoryPage from './AdminPage/CategoryPage';
import ProductAdd from './AdminPage/ProductAddPage';
import ShippingPage from './clientpage/ShippingPage';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import { listCategory } from './action/productAction';

function App() {



  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;

  //catgory
  const [category, setCategory] = useState()


  const categoriesList = useSelector((state) => state.categoriesList);
  const {loading, error, categories} = categoriesList; 

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const dispatch = useDispatch()
  const signoutHandaler =() =>{
    dispatch(signout());
    

  }
  useEffect(()=>{
    dispatch(listCategory())
  },[dispatch])

  const [divOpen, setDivOpen] = useState(false);
  // const loadsubCategory =(e)=>{
  //     console.log("clicked")

  //     // categories.map(cat =>(
  //     //   setCategory(cat.cat_name)
  //     // ))
      
  //     console.log(category)
      
  // }
  const submitHandaler =(e) =>{
    e.preventDefault()
    
    console.log(category)
    setDivOpen(true)
  }
  const loadCategory =()=>{
    setDivOpen(false)
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className='header-top'>
                <div style={{float:'right'}}>
                    track order
                </div>
            </div>
            <div className="row header-row">
              <div className="nav-left" >
                <button
                    type="button"
                    className="open-sidebar"
                    onClick={() => setSidebarIsOpen(true)}
                  >
                    <i className="fa fa-bars" style={{color:"black"}}></i>
                  </button>
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
                      <li><Link to="/setting" >setting</Link></li>
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
                        <li>
                          <Link to='/profile' >Profile</Link>
                        </li>
                        <li>
                          <Link to="/setting" >My Order</Link>
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
            {/* <div id="nav-scroll" className="nav-menu-item">
               <span className="nav-menu" 
                style={{color:'#fff'}}
                onClick={() => setSidebarIsOpen(true)}
              >

              &#9776; 
              
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
             
            </div>  */}
              
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
                  style={{float:"right"}}
                >
                  <i className="fa fa-close"></i>
                </button>
              </li>
              <li className={divOpen ? 'close_category': ''}>
              {
                        loading? <LoadingBox></LoadingBox>
                    :
                        error? <MessageBox variant="danger">{error}</MessageBox>
                    :  
                    
                    <form onSubmit={submitHandaler}>
                      <div className="aside-category">
                      <ul  >
                            {
                            categories.map((category)=>(    
                                <li  > 
                                  <div >
                                    <Link 
                                      to={`/category/${category.cat_name}/${category.id}`}
                                      style={{color:"blueviolet"}}
                                      onClick={() => setSidebarIsOpen(false)}
                                    >  
                                    
                                      {category.cat_name}
                                  </Link>
                                  </div>
                                  <div >
                                    <button type="submit" onClick={(e) =>setCategory(e.target.value)}
                                      value={category.cat_name} 
                                      style={{style:"font-weight: bolder"}}
                                    >
                                      
                                    </button>
                                  </div>
                                </li>    
                            ))
                            }
                          </ul>
                      </div> 
                    </form> 
                }
              </li>

            </ul>
              <ul className="sub_category">
              <div className={ divOpen ? 'open': ''} >
              
                <span>
                  
                  <li>
                  <i className="fa fa-caret-left" style={{cursor:"pointer",padding:'1rem'}} onClick={loadCategory}></i>
                    bibash
                  </li>
                </span>
                </div>
              </ul>
            

          </aside>
          <main >
            {/* for admin */}

            <Route path='/admin/add_Category' component={CategoryPage} ></Route>
            <Route path="/admin/add_product"component={ProductAdd}></Route>

            {/* for client page */}
            <Route path="/shipping" component={ShippingPage}></Route>
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
