

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signup } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function RegisterPage(props){

    const [name, SetName] = useState(''); 
    const [email, SetPhone] = useState(''); 
    const [password, SetPassword] = useState(''); 

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/'

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error} =userRegister;

    const dispatch = useDispatch();
    const registerHandaler =(e)=>{
        e.preventDefault();
        dispatch(Signup(name, email, password))
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }

    }, [props.history, redirect, userInfo]);


    return(
        <div>
            
          
            <form className="form" onSubmit={registerHandaler}>
                <div>
                <h2> Create A account</h2>
                </div>
                <div>
                    {
                            loading? <LoadingBox></LoadingBox>
                        :
                            error? <MessageBox variant="danger">{error}</MessageBox>
                        : " "    
                    }
                </div>
                <div className="">
                    <label htmlfor="Name"> Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name"
                        onChange={(e) => SetName(e.target.value)}
                        
                    ></input>
                </div>
                <div className="">
                    <label htmlfor="phone">  Phone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="phone"
                        onChange={(e) => SetPhone(e.target.value)}
                    
                    ></input>
                </div>
                <div>
                    <label htmlfor="Password"> Password</label>
                    <input 
                        type="password"
                        id="password" 
                        placeholder="password"
                        onChange={(e) => SetPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button type="submit" className="primary">sign in</button>
                </div>
                <div>
                    <span>
                    Already Have account? { ' '}
                    <Link to={`/signin?redirect=${redirect}`} style={{ color:"blue"}}>
                          Sign In
                    </Link> 
                    </span>
                </div>

            </form>
           
        </div>
    )

}

export default RegisterPage;