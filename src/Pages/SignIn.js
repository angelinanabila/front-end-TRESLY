import React from 'react'
import '../Css/Daftar.css'
import logo from '../Images/logo-putih.png';

class SignIn extends React.Component{
    render(){
        return(
            <div>
                <div class="rectangle-daftar">
                    <img src={logo} width={300}/>
                    <h1>TRESLY</h1>
                </div>
                <div class="rectangle-daftar2">
                    <form>
                        <div class="title-daftar">
                            <h1>Sign In</h1>
                            <div class="isi-daftar col-8">
                                <h5>Name</h5>
                                <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                                <h5>Birth Date</h5>
                                <input type="date" class="form-control" id="exampleFormControlInput1"></input>
                                <h5>Phone Number</h5>
                                <input type="int" class="form-control" id="exampleFormControlInput1"></input>
                                <h5>Username</h5>
                                <input type="username" class="form-control" id="exampleFormControlInput1"></input>
                                <h5>Password</h5>
                                <input type="password" class="form-control" id="exampleFormControlInput1"></input>
                                <p class="des">Already have an account? Click here to log in!</p>
                                <button type="button" class="btn col-4 btn-secondary">Sign In</button>
                                <button type="button" class="dua col-4 btn btn-outline-secondary">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;