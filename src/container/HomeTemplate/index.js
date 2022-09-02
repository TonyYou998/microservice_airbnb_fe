import React from 'react'
import {Route} from "react-router-dom";
import HomePage from './HomePage';

function LayoutHome(props){
    
    return <div>
        {props.children}
    </div>
}
export default function HomeTemplate({Component,...props}) {
  
  return (   
    
    <Route
        {...props}
        render={
            (propsComponent)=>(
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )
        }
      />
    
    
    
  )
}
