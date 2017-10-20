import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Callback from './pages/Callback/Callback';
import Auth from './pages/Auth/Auth';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
          <Route exact path="/users/:id" component={Detail} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        
        </div>
      </Router>
  );
}
