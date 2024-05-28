import React from "react";
import '../Css/Shopping.css'
import batik from '../Images/batikk.png';
import batikk from '../Images/batik3.png';
import image1 from '../Images/image1.png';
import { Modal } from "bootstrap";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";

export default class Shopping extends React.Component {
    constructor() {
        super();
        this.state = {
            produk: [
                {
                    id: "1",
                    nama_produk: "Kebaya bali",
                    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
                    harga: "500",
                    foto_produk: "https://disbud.bulelengkab.go.id/public/uploads/konten/74_busana-adat-bali-wanita-ke-pura.jpg",
                },
                {
                    id: "2",
                    nama_produk: "Kebaya",
                    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
                    harga: "200",
                    foto_produk: "https://i.pinimg.com/736x/46/26/c5/4626c59b2d60eb0b6106e3e0de6974f6.jpg",
                },
            ],
            action: "",
            id: "",
            nama_produk: "",
            deskripsi: "",
            harga: 0,
            foto_produk: "",
            selectedItem: null,
            modal: null
        };

    }

    Add = () => {
        this.state.modal.show();

        this.setState({
            id: Math.random(1, 1000000),
            nama_produk: "",
            deskripsi: "",
            harga: 0,
            foto_produk: "",
            action: "insert",
        });
    };

    Edit = (item) => {
        this.state.modal.show();

        this.setState({
            id: item.id,
            nama_produk: item.nama_produk,
            deskripsi: item.deskripsi,
            harga: item.harga,
            foto_produk: item.foto_produk,
            action: "update",

            selectedItem: item,
        });
    };

    Save = (event) => {
        event.preventDefault();
        // menampung data state produk
        let tempProduk = this.state.produk;

        if (this.state.action === "insert") {
            // menambah data baru
            tempProduk.push({
                id: this.state.id,
                nama_produk: this.state.nama_produk,
                deskripsi: this.state.deskripsi,
                foto_produk: this.state.foto_produk,
                harga: this.state.harga,
            });
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempProduk.indexOf(this.state.selectedItem);
            tempProduk[index].id = this.state.id;
            tempProduk[index].nama_produk = this.state.nama_produk;
            tempProduk[index].deskripsi = this.state.deskripsi;
            tempProduk[index].foto_produk = this.state.foto_produk;
            tempProduk[index].harga = this.state.harga;
        }

        this.setState({ produk: tempProduk });
        this.state.modal.hide();
        // menutup komponen modal_buku
    };


    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Are you sure to delete this data?")) {
            // menghapus data
            let tempProduk = this.state.produk;
            // posisi index data yg akan dihapus
            let index = tempProduk.indexOf(item);

            // hapus data
            tempProduk.splice(index, 1);

            this.setState({ produk: tempProduk });
        }
    };

    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = [];
    
        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
          tempCart = JSON.parse(localStorage.getItem("cart"));
          // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
    
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find((item) => item.id === selectedItem.id);
    
        if (existItem) {
          // jika item yang dipilih ada pada keranjang belanja
          window.alert("You've already chosen this item");
        } else {
          // user diminta memasukkan jumlah item yang dibeli
          window.alert("Succes add to cart");
        }
      };
    

    render() {
        return (

            // <div>
            //     <div id="carouselExampleControls" class="car carousel slide" data-bs-touch="false" data-bs-interval="false" >
            //         <div class="carousel-inner">
            //             <div class="carousel-item active">
            //                 <div class="row">
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt="carousel1"></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={image1} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt="carousel1"></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batik} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={image1} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="carousel-item">
            //                 <div class="row">
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt="carousel1"></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={image1} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt="carousel1"></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batik} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={batikk} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                     <div class="col-2">
            //                         <img src={image1} class="d-block w-100" alt=""></img>
            //                         <h3 align="center">Javanese</h3>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            //             <span class="visually-hidden">Previous</span>
            //         </button>
            //         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
            //             <span class="visually-hidden">Next</span>
            //         </button>
            //     </div>
            //     <div>
            //     <div style={{ display: 'flex'}}>
            //     {this.state.produk.map((item, index) => (
            //             <div className="col-4" key={index}>
            //                 <Card
            //                     nama_produk={item.nama_produk}
            //                     deskripsi={item.deskripsi}
            //                     harga={item.harga}
            //                     foto_produk={item.foto_produk}
            //                     onDrop={() => this.Drop(item)}
            //                     onEdit={() => this.Edit(item)}
            //                 />
            //             </div>
            //         ))}
            //     </div>

            <div>
                <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    {this.state.produk.map((item, index) => (
                        <div className="col-3" key={index}>
                            <Card
                                nama_produk={item.nama_produk}
                                deskripsi={item.deskripsi}
                                harga={item.harga}
                                foto_produk={item.foto_produk}
                                onDrop={() => this.Drop(item)}
                                onEdit={() => this.Edit(item)}
                                onCart={() => this.addToCart(item)}
                            />
                        </div>
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Add Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_produk">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">Add Product</div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={(ev) => this.Save(ev)}>
                                    Name product
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={this.state.nama_produk}
                                        onChange={(ev) => this.setState({ nama_produk: ev.target.value })}
                                        required
                                    />
                                    Description
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={this.state.deskripsi}
                                        onChange={(ev) =>
                                            this.setState({ deskripsi: ev.target.value })
                                        }
                                        required
                                    />
                                    Price
                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={(ev) => this.setState({ harga: ev.target.value })}
                                        required
                                    /> 
                                    Photo
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={this.state.foto_produk}
                                        onChange={(ev) => this.setState({ foto_produk: ev.target.value })}
                                        required
                                    />
                                    <button className="btn btn-dark btn-block" type="submit">
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.state.modal = Modal.getOrCreateInstance('#modal_produk')
    }
}