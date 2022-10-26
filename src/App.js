import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomeTemplate from './container/HomeTemplate';
import { routeHost, routesUser } from './routes';
import HomePage from './container/HomeTemplate/HomePage';
import HostTemplate from 'container/HostTemplate';

function App() {
  const showLayoutUser=(routes)=>{
    
    if(routes&& routes.length>0){
      return routes.map((item,index)=>{
        return(
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
           
        )

      });
    }

  }
  const showLayoutHost=(routes)=>{
    if(routes && routes.length>0){
      return routes.map((item,index)=>{
          return(
            <HostTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.Component}
            />
          )
      });
    }
  }
  return (
    <Switch>
      {showLayoutUser(routesUser)}
      {showLayoutHost(routeHost)}
    </Switch>
    
  )
    
}

export default App;
