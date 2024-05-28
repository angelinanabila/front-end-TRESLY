import React, { Component } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import Navbar from "../../Components/Navbar/Navbar";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id_user: "",
      nama_user: "",
      tlp: "",
      tgl_lahir: "",
      username: "",
      password: "",
      role: "",
      search: "",
      modal: null,
    };
  }

  bind = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Add = () => {
    this.state.modal.show();
    // mengosongkan isi variabel nip, nama, dan alamat
    // set action menjadi "insert"
    this.setState({
      id: "",
      nama_user: "",
      tlp: "",
      tgl_lahir: "",
      username: "",
      password: "",
      action: "insert",
    });
  };

  Edit = (item) => {
    this.setState({
      id_user: item.id_user,
      nama_user: item.nama_user,
      tlp: item.tlp,
      tgl_lahir: item.tgl_lahir,
      username: item.username,
      password: item.password,
      role: item.role,
      action: "update",
    });
    this.state.modal.show();
  };

  getUser = () => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        // Mengakses data pengguna dari response
        const users = response.data.data;
        // Mengupdate state user dengan data pengguna
        this.setState({ user: users });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  findUser = (event) => {
    if (event.key === "Enter") {
      // Periksa apakah tombol yang ditekan adalah Enter
      let url = "http://localhost:5000/user";

      // Menyiapkan data pencarian
      let searchData = {
        keyword: this.state.search, // Menggunakan nilai pencarian dari state
      };

      // Mengirim permintaan POST ke API untuk mencari pengguna berdasarkan keyword
      axios
        .post(url + "/find", searchData)
        .then((response) => {
          // Mengupdate state user dengan data pengguna yang ditemukan
          this.setState({ user: response.data.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  saveUser = (event) => {
    event.preventDefault();

    let url = "";
    let method = ""; // Tambahkan variabel untuk menyimpan metode HTTP (PUT atau PATCH) yang akan digunakan

    // Tentukan URL dan metode HTTP berdasarkan action (insert atau update)
    if (this.state.action === "insert") {
      url = "http://localhost:5000/user/save";
      method = "POST";
    } else if (this.state.action === "update") {
      url = "http://localhost:5000/user/" + this.state.id_user;
      method = "PUT"; // Jika ingin mengubah data, gunakan metode PUT
    }

    let form = {
      nama_user: this.state.nama_user,
      tlp: this.state.tlp,
      tgl_lahir: this.state.tgl_lahir,
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
    };

    // Menggunakan axios untuk mengirim permintaan ke backend
    axios({
      method: method,
      url: url,
      data: form,
    })
      .then((response) => {
        // Jika proses simpan berhasil, memanggil data yang terbaru
        this.getUser();
        window.alert(response.data.message); // Menampilkan pesan sukses kepada pengguna
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Terjadi kesalahan saat menyimpan data pengguna"); // Menampilkan pesan error kepada pengguna
      })
      .finally(() => {
        // Menutup form modal
        if (this.state.modal) {
          this.state.modal.hide();
        }
      });
  };

  Drop = (id_user) => {
    let url = "http://localhost:5000/user/" + id_user;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(url)
        .then((response) => {
          // jika proses hapus data berhasil, memanggil data yang terbaru
          this.getUser();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.setState({
      modal: new Modal(document.getElementById("modal_user")),
    });
    this.getUser(); // Fetch user data
  }

  render() {
    return (
      <div className="m-3 card">
        <Navbar></Navbar>
        <div className="card-header bg-info text-white">Data Admin</div>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-2"
            name="search"
            value={this.state.search}
            onChange={this.bind}
            onKeyUp={this.findUser}
            placeholder="Pencarian..."
          />

          {/* tampilan tabel admin */}
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Role</th>
                <th>Nama</th>
                <th>Tlp</th>
                <th>Tgl Lahir</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {this.state.user && this.state.user.length > 0 ? (
                this.state.user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id_user}</td>
                      <td>{item.role}</td>
                      <td>{item.nama_user}</td>
                      <td>{item.tlp}</td>
                      <td>{item.tgl_lahir}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-info m-1"
                          onClick={() => this.Edit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger m-1"
                          onClick={() => this.Drop(item.id_user)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                // <tr>
                //   <td colSpan="6">No data available</td>
                // </tr>
                <></>
              )}
            </tbody>
          </table>

          <button className="btn btn-success" onClick={() => this.Add()}>
            Tambah Data
          </button>

          {/* modal form pegawai */}
          <div className="modal fade" id="modal_user">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">Form User</div>
                <div className="modal-body">
                  <form onSubmit={(ev) => this.saveUser(ev)}>
                    {/* id_user
                    <input
                      type="number"
                      name="id"
                      value={this.state.id}
                      onChange={this.bind}
                      className="form-control"
                      required
                    /> */}
                    Nama
                    <input
                      type="text"
                      name="nama_user"
                      value={this.state.nama_user}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Role
                    <select
                      name="role"
                      value={this.state.role}
                      onChange={this.bind}
                      className="form-control"
                      required
                    >
                      <option value="">Pilih Role</option>
                      <option value="pelanggan">Pelanggan</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                    Tlp
                    <input
                      type="text"
                      name="tlp"
                      value={this.state.tlp}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Tgl_lahir
                    <input
                      type="text"
                      name="tgl_lahir"
                      value={this.state.tgl_lahir}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Username
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Password
                    <input
                      type="text"
                      name="password"
                      value={this.state.password}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    <div className="modal-footer">
                      <button className="btn btn-sm btn-success" type="submit">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //     this.state.modal = Modal.getOrCreateInstance('#modal_user')
  //     this.getUser()
  //   }
}

export default Admin;
