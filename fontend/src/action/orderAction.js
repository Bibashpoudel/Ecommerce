import axios from "axios"
import { SHIPPING_ADDRESS_ADD_REQUEST } from "../Constants/orderConstants"


export const addUserShippingAdress = (state, district, address1, address2) => async(dispatch)=>{
    dispatch({
        type:SHIPPING_ADDRESS_ADD_REQUEST,
        payload:{state, district, address1, address2}
    })
    try {
        const data = await axios.post('/api/user/shippingaddress')
        
    } catch (error) {
        
    }

}