import React from 'react'
import { Route } from 'react-router-dom'
import HeaderPage from './ConfirmPage/Components/HeaderPage'
import NavBarHost from './HomePage/Components/NavbarHost'
function LayoutHost(props){
  return<>
  <HeaderPage/>
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
