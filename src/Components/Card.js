import React from "react"
import '../Css/Card.css'
import cart from '../Images/cart.png'
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        return (
            <div class="p-5">
                <div className="shop">
                    <div className="card-body">
                        <img src={this.props.foto_produk} className="card-img-top" height="250" />
                        <h4 className="text-dark">
                            {this.props.nama_produk} 
                        </h4>
                        <h6 className="card-text text-secondary">
                            {this.props.deskripsi}
                        </h6>
                        <h6 className="card-text text-dark">
                            Price: ${this.props.harga}
                        </h6>

                        <button class="button-edit col-4"
                            onClick={this.props.onEdit}>
                            Edit</button>

                        <button className="button-delete col-5"
                            onClick={this.props.onDrop}>
                            Delete
                        </button>

                        <Link className=""
                            onClick={this.props.onCart}>
                            <img src={cart} width={30}></img>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
 