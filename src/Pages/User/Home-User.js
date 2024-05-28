import React from "react";
import '../../Css/Home.css'
import image1 from '../Images/image1.png';
import batik from '../Images/batikk.png';
import batikk from '../Images/batik3.png';
import prilly from '../Images/prilly.png';
import jawa from '../Images/jawa.png';
import adat from '../Images/adat.png';
import logo from '../Images/logo-putih.png';
import ig from '../Images/insta-icon.png';
import fb from '../Images/fb-icon.png';
import x from '../Images/x-icon.png';
import tt from '../Images/tt-icon.png';
import Navbar from "../../Components/Navbar/Navbar-User";

class Home extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <Navbar></Navbar>
                <div class="header">
                    <img src={prilly}></img>
                    <h1>Find The Best<br></br> Fashion Style<br></br> For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Eget tellus sed eget volutpat lectus ac.</p>
                    <button class="button-header">Buy Now</button>
                </div>
                
                <div class="isi-judul">
                    <h1>Best Outfit</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam pharetra eget nec non. Tincidunt eget etiam egestas condimentum vestibulum lorem a.</p>
                </div>
                <div class="isi">
                    <div class="imagee flex-wrap">
                        <img src={image1} width={413} height={450}></img>
                        <div class="rectangle-isi">
                            <h3>Batik Indonesia</h3>
                            <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                        </div>
                    </div>
                </div>
                <div class="isii">
                    <div class="flex-wrap">
                        <img src={batik} width={413} height={450}></img>
                        <div class="rectangle-isii">
                            <h3>Batik Indonesia</h3>
                            <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                        </div>
                    </div>
                </div>

                <div class="isiii">
                    <div class="flex-wrap">
                        <img src={batikk} width={413} height={450}></img>
                        <div class="rectangle-isiii">
                            <h3>Batik Indonesia</h3>
                            <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                        </div>
                    </div>
                </div>

                <div class="isi2">
                    <img src={prilly}></img>
                    <h1>Best Fashion Since 2022</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Feugiat posuere et at et vel purus enim urna. Purus nunc et lectus duis nulla ante. Montes a lacus pellentesque vitae. Non pulvinar eu eu proin.</p>
                    <div class="rectangle-isi2">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <h3>2022</h3>
                                    <h5>Collection by Tresly</h5>
                                    <div class="vertical-line"></div>
                                </div>
                                <div class="col-sm">
                                    <h3>900+</h3>
                                    <h5 align="center">Product sold</h5>
                                </div>
                                <div class="col-sm">
                                    <h3>105+</h3>
                                    <h5 align="center">Best Reviews</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="isi3">
                    <div class="rectangle-isi3">
                        <h1>Regional Outfit</h1>
                        <p class="khusus">Lorem ipsum dolor sit amet consectetur. Feugiat posuere et at et vel purus enim urna. Purus nunc et lectus duis nulla ante. Montes a lacus pellentesque vitae. Non pulvinar eu eu proin.</p>
                        <button type="button" class="btn btn-outline-light col-1.5">See More</button>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row justify-content-center">
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={jawa} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Javanese</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={jawa} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card 1</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={jawa} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card 1</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row justify-content-center">
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={adat} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card 1</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={adat} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card 1</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={adat} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card 1</h5>
                                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="isi4">
                    <div class="isi4-judul">
                        <h1>Choose Your Outfit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam pharetra eget nec non. Tincidunt eget etiam egestas condimentum vestibulum lorem a.</p>
                    </div>

                    <div class="isi-4">
                        <div class="imagee flex-wrap">
                            <img src={image1} width={413} height={450}></img>
                            <div class="rectangle-isi4">
                                <h3>Batik Indonesia</h3>
                                <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                            </div>
                        </div>
                    </div>

                    <div class="isii-4">
                        <div class="flex-wrap">
                            <img src={batik} width={413} height={450}></img>
                            <div class="rectangle-isii4">
                                <h3>Batik Indonesia</h3>
                                <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                            </div>
                        </div>
                    </div>

                    <div class="isiii-4">
                        <div class="flex-wrap">
                            <img src={batikk} width={413} height={450}></img>
                            <div class="rectangle-isiii4">
                                <h3>Batik Indonesia</h3>
                                <p>Lorem ipsum dolor sit amet consectetur Feugiat posuere et at et vel purus enim urna</p>
                            </div>
                        </div>
                    </div>
                    <button class="button-choose">See More</button>
                </div>

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
            </div>
        )
    }

}
export default Home;