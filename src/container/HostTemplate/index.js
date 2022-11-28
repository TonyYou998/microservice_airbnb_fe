import React from 'react'
import { Route } from 'react-router-dom'
import NavBarHost from './HomePage/Components/NavbarHost'
function LayoutHost(props){
  return<>
  <NavBarHost/>
    {props.children}
  </>
}

export default function HostTemplate({Component,...props}) {
  return (
    <Route
      {...props}
      render={
        (propsComponent)=>(
          <LayoutHost>
            <Component {...propsComponent}/>
          </LayoutHost>
        )
      }
    />
  )
}
