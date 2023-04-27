import React, { useState, useEffect } from "react";
import "./view.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function View() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [change, setChange] = useState(true);
  const [editMode, setEditMode] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [editChange, setEditChange] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    getAlluser();
  }, []);

  function getAlluser() {
    fetch("http://localhost:5000/view", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/view`).then((data) => {
      getAlluser();
    });
  };
  const handleEditModeToggle = (v) => {
    setEditChange(v);
  };

  const handleSave = (id) => {
    setEditChange(null);
    axios
      .put(`http://localhost:5000/view/${id}`, {
        name: name,
      })
      .then((response) => {
        getAlluser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleView(name) {
    axios.post(`http://localhost:5000/view/${name}`).then((res) => {
      const data = res.data;
      navigate("/SingleRecord", { state: { data } });
      console.log(data);
    });
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search here"
        onChange={handleChange}
      />
      <h1>View Page</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {search === ""
            ? data.map((i, v) => {
                return !editMode[i.id] ? (
                  <tr key={i._id} id={v}>
                    <td>
                      {editChange === v ? (
                        <input
                          type="text"
                          name="name"
                          defaultValue={""}
                          onChange={(e) => setName(e.target.value)}
                        />
                      ) : (
                        <div ref={i.id}>{i.name}</div>
                      )}
                    </td>
                    <td>{i.email}</td>
                    <td>{i.address}</td>
                    <td>{i.mobile}</td>
                    <td>{i.postalCode}</td>
                    <td>
                      <button
                        onClick={() => handleView(i.name)}
                        data-custom-view={i.name}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(i)}>Delete</button>
                    </td>
                    <td>
                      {editChange === v ? (
                        <button onClick={() => handleSave(i._id)}>Save</button>
                      ) : (
                        <button onClick={() => handleEditModeToggle(v)}>
                          Edit{" "}
                        </button>
                      )}
                    </td>
                  </tr>
                ) : (
                  <tr key={i._id}>
                    <td>
                      <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="email"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="address"
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mobile"
                        defaultValue={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleSave(i)}>Save</button>
                    </td>
                  </tr>
                );
              })
            : data
                .filter((i) => i.name === search)
                .map((i, v) => (
                  <tr key={v}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.mobile}</td>
                    <td>{i.address}</td>
                  </tr>
                ))}
        </tbody>
      </Table>
    </div>
  );
}

export default View;
