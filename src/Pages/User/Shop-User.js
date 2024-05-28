import React from "react";
import '../Css/Shopping.css'
import batik from '../Images/batikk.png';
import batikk from '../Images/batik3.png';
import image1 from '../Images/image1.png';
import { Modal } from "bootstrap";
import Navbar from "./Navbar/Navbar";

export default class Shopping extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div id="carouselExampleControls" class="car carousel slide" data-bs-touch="false" data-bs-interval="false" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt="carousel1"></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={image1} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt="carousel1"></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batik} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={image1} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt="carousel1"></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={image1} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt="carousel1"></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batik} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={batikk} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                                <div class="col-2">
                                    <img src={image1} class="d-block w-100" alt=""></img>
                                    <h3 align="center">Javanese</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}