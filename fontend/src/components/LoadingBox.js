import React from 'react';
import '../stylesheet/client.css';


export default function LoadingBox(){
    return(
        <div className="load-spinner">
        <i class="fa fa-spinner fa-pulse"></i>

            <span>
            Loading ...
            </span>
       </div> 
    )
}