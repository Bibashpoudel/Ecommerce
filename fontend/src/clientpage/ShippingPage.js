
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CheckoutSteps from '../components/checkoutSteps';



function ShippingPage(props){

    const [state, SetState] = useState();
    const [ district, setDistrict ] = useState();
    const [ address1, SetAddress1] = useState();
    const [address2, SetAddress2] = useState();

    const dispatch = useDispatch()


    const addShipping =(e)=>{
        e.preventDefault()

    }
    return(
        <div >
            <CheckoutSteps step1 step2></CheckoutSteps>
           <form className="form" onSubmit={addShipping}>
               <div>
                <label htmlFor="state">State</label> 
                <select 
                    onChange={(e) =>SetState(e.target.value)}
                >
                    {/* <option>1</option>
                    <option>2</option> */}
                    <option>Bagmati 3</option>
                    {/* <option>Gandaki 4</option> */}
                    {/* <option>5</option>
                    <option>6</option>
                    <option>7</option> */}
                </select>
               </div>
               <div>
                <label htmlFor="district">District</label> 
                <select 
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    {/* <option>1</option>
                    <option>2</option> */}
                    <option>Chitwan</option>
                    {/* <option>Gandaki 4</option> */}
                    {/* <option>5</option>
                    <option>6</option>
                    <option>7</option> */}
                </select>
               </div>
               <div>
                   <label htmlFor="address line 2"> Address Line 1</label>
                   <input
                        type="text"
                        id="address1"
                        name="address1"
                        placeholder="eg BharatPur 16"
                        onChange={((e )=> SetAddress1(e.target.value))}
                   ></input>
               </div>
               <div>
                   <label htmlFor="address line 2"> Address Line 2</label>
                   <input
                        type="text"
                        id="address1"
                        name="address1"
                        placeholder="eg Kamal Nagar"
                        onChange={(e) => SetAddress2(e.target.value)}
                   ></input>
               </div>
               <div >
                    <label/>
                    <button className="secondary" disabled> choose on map</button>
               </div>
               <div >
                    <label/>
                    <button className="primary" type="submit"> Continue</button>
               </div>
           </form>
        </div>
    )
}

export default ShippingPage;