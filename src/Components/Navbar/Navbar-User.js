import React from 'react'
import logo from '../../Images/logo-navbar.png'
import cart from '../../Images/cart.png'
import { Link } from 'react-router-dom';
import '../../Css/Navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <div class="wrapper">
                <nav>
                  <div class="menu">
                    <ul>
                      <li><img src={logo} width={80}></img></li>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/shopping'>Shop</Link></li>
                      <li><Link to=''>Transaction</Link></li>
                    </ul>
                  </div>

                  <div class="search col-1.4">
                    <ul>
                      <input type="text" class="form form-control" placeholder="Search" id="exampleFormControlInput1"></input>
                    </ul>
                  </div>

                  <div>
                    <ul>
                    <li><Link to=''><img class="cart" src={cart} width={30}></img></Link></li>
                    </ul>
                  </div>
                  
                  <div class="login">
                    <ul>
                      <li><Link to='/logIn'>Log In</Link></li>
                      <li><p><Link to='' class="rectangle-register">Log Out</Link></p></li>
                    </ul>   
                  </div>                    
                </nav>
            </div>
        )
    }
}

export default Navbar;