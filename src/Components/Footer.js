import React from 'react'
import '../Css/Footer.css'
import logo from '../Images/logo-putih.png';
import ig from '../Images/insta-icon.png';
import fb from '../Images/fb-icon.png';
import x from '../Images/x-icon.png';
import tt from '../Images/tt-icon.png';

export default class Footer extends React.Component {
    render(){
        return(
            <div class="footer">
            <div class="rectangle-footer">
                <img src={logo} width={100}></img>
                <h2>TRESLY</h2>
                <div class="isi-footer">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Transaction</p>
                    <p>Shopping Cart</p>
                    <p>Profile</p>
                </div>

                <div class="input col-2">
                    <p>Comment</p>
                    <input type="text" class="form form-control" id="exampleFormControlInput1"></input>
                    {/* <div class="submit">
                        <img src={submit} width={100}></img>
                    </div> */}
                </div>

                <div class="img-icon">
                    <img src={ig}></img>
                    <img src={fb}></img>
                    <img src={x}></img>
                    <img src={tt}></img>
                </div>
            </div>
        </div>
        )
    }
}