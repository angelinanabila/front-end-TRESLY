import React, {useState} from "react";
import axios from 'axios';
import '../Css/Daftar.css'
import logo from '../Images/logo-putih.png';

class LogIn extends React.Component{
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //     let response = await axios.post(baseURL + "/auth/authentication", {
    //         username,
    //         password,
    //     });
    //     console.log(response.data);
    //     if (response.data) {
    //         // alert(response.data.message)
    //         localStorage.setItem("logged", response.data.logged);
    //         localStorage.setItem("namauser",JSON.stringify(response.data.data.nama_user));
    //         localStorage.setItem("id_user",JSON.stringify(response.data.data.id));
    //         localStorage.setItem("users", JSON.stringify(response.data.data.role));
    //         localStorage.setItem("token", response.data.token);
            
    //         if (response.data.data.role === "admin") {
    //         navigate("/DashboardAdmin");
    //         } else if (response.data.data.role === "kasir") {
    //         navigate("/DashboardKasir");
    //         } else if (response.data.data.role === "manajer") {
    //         navigate("/DashboardManajer");
    //         }else {
    //         alert("Anda tidak memiliki izin untuk mengakses halaman ini.");
    //         }
    //     } else {
    //         console.log("LOGIN GAGAL");
    //         alert("Login Gagal");
    //     }
    //     } catch (error) {
    //     console.log(error);
    //     }
    // };
    
    render(){
        return(
            <div>
                <div class="rectangle-daftar">
                    <img src={logo} width={300}/>
                    <h1>TRESLY</h1>
                </div>
                <div class="rectangle-daftar2">
                    <form>
                        <div class="title-masuk">
                            <h1>Log In</h1>
                            <div class="isi-daftar col-8">
                                <h5>Username</h5>
                                <input type="username" class="form-control" id="exampleFormControlInput1"></input>
                                <h5>Password</h5>
                                <input type="password" class="form-control" id="exampleFormControlInput1"></input>
                                <div class="form-check"><br></br>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                    <label class="pw form-check-label" for="flexCheckDefault">
                                        Forgot Password?
                                    </label>
                                </div>
                                <br></br>
                                <button type="button" class="btn col-4 btn-secondary">Masuk</button>
                                <button type="button" class="dua col-4 btn btn-outline-secondary">Daftar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn;