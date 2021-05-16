import React, { useEffect, useState } from 'react'

import {  Link, } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Signin } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



function SiginInPage(props){

    const [phone, SetPhone] = useState(''); 
    const [password, SetPassword] = useState(''); 

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/'

    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} =userSignin;

    const dispatch = useDispatch();


    const SigninHandaler = (e)=>{
        e.preventDefault();
        dispatch(Signin(phone, password))
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }

    }, [props.history, redirect, userInfo]);

    return(
        <div >
            



            <form className="form" onSubmit={SigninHandaler}>
                <div>
                <h2> Sign In</h2>
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
                    <label htmlfor="phone"> Phone</label>
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
                    New Customer? { ' '}
                    <Link to={`/register?redirect=${redirect}`} style={{ color:"blue"}}>
                          Create A account
                    </Link> 
                    </span>
                </div>

            </form>
           
        </div>
    )
}
export default SiginInPage;