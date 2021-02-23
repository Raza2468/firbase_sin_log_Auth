import React from 'react'
import Signup from "./Singup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Container } from 'react-bootstrap'
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    // <Container className="d-flex align-items-center justify-content-center" style={{maxHeight:"100vh"}}>
    //  <div className="w-100" style={{maxWidth: "400px"}}> 

    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
