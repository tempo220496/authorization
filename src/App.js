import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Frontend from './containers/Frontend/Frontend';
import Dashboard from './containers/Dashboard/Dashboard';
import PrivateRoute from './components/Privateroute/PrivateRoute';
import Login from './components/Login/Login';

import 'semantic-ui-css/semantic.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './store/actions/authAction';

const App = () => {
  const dispatch=useDispatch();
  const {isAuth}=useSelector(state=>(state.auth.isAuth));
  
  useEffect(()=>{
    dispatch(authCheck())
  },[dispatch,isAuth]);
  return (
    <div>
      <div>
        <Link to="/dashboard" >Go to admin</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Frontend} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuth={isAuth}/>
      </Switch>
    </div>
  );
}

export default App;
