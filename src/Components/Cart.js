import React from "react"
import Navbar from "./Navbar/Navbar";
import '../Css/Cart.css'
import hapus from '../Images/delete.png';
import Footer from "././Footer"

export default class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
           // user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
        }
    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        

        // memanggil data user pada localStorage
        //let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            //user: userName,
            total: totalHarga
        })
    }

    componentDidMount(){
        this.initCart()
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                
                <div className="container">
                    <div className="col-12 mt-2">
                        <div className="card-body">

                            <table className="table table-borderless">
                                <tbody>
                                    { this.state.cart.map( (item, index) => (
                                        <tr key={index}>
                                            <td>foto produk</td>
                                            <td>
                                                <h4 className="namaproduk">{item.nama_produk}</h4>
                                                <h5>$ {item.harga}</h5>
                                                <button class="button-edit col-2"
                                                    onClick={this.props.onEdit}>
                                                    Buy
                                                </button>
                                                <img src={hapus}></img>
                                            </td>
                                            <td><input type="number" placeholder="0" min="1" max="10"></input></td>
                                        </tr>
                                    ) ) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}