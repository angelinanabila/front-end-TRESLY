import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn'
import LogIn from './Pages/LogIn'
import Home from './Components/Home'
import Shopping from './Components/Shopping'
import Cart from './Components/Cart'
import Admin from './Pages/Admin/Admin'

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/signIn" Component={SignIn} />
      <Route exact path="/logIn" Component={LogIn} />
      <Route exact path="/shopping" Component={Shopping} />
      <Route exact path="/cart" Component={Cart} />
      <Route exact path="/admin" Component={Admin} />
    </Routes>
  );
}

export default App;
