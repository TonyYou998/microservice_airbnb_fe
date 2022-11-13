import React from 'react'
import { Route } from 'react-router-dom'
function LayoutHost(props){
  return<>
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
