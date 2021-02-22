import React from 'react'
import Signup from "./Singup";
import { Container } from 'react-bootstrap'
import AuthProvider from "../contexts/AuthContext";


function App() {
  return (
    // <Container className="d-flex align-items-center justify-content-center" style={{maxHeight:"100vh"}}>
    //  <div className="w-100" style={{maxWidth: "400px"}}> 
    <AuthProvider>
    <div>
      <h1>Raza</h1>
      <Signup />
    </div>
    </AuthProvider>
  );
}

export default App;
