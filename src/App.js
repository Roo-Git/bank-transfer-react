import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
