import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Home() {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(e) {
    axios.post("http://localhost:5000/home", { data })
    .then((res) => {
      const data = res.data
      navigate("/view");
    }
    );
  }
  function selectFile(e) {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.set("file", selectedFile);
  }

  return (
    <div>
      <h1>Add Record</h1>
      <div>
        <div className="main">
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="email"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="amount" label="Amount" className="mb-3">
              <Form.Control
                name="amount"
                onChange={handleChange}
                placeholder="Amount"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="address" label="Address" className="mb-3">
              <Form.Control
                name="address"
                onChange={handleChange}
                placeholder="Address"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              className="bill mb-3"
              label="Billing and Service Details"
            >
              <Form.Control
                name="Billing"
                onChange={handleChange}
                placeholder="Billing and service details"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="address" className="mb-3" label="Address">
              <Form.Control
                name="address"
                onChange={handleChange}
                placeholder="Address"
                required
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel className="mb-3" label="Corporate Name">
              <Form.Control
                name="corporateName"
                onChange={handleChange}
                placeholder="Corporate Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-3" label="Mobile">
              <Form.Control
                name="mobile"
                onChange={handleChange}
                placeholder="Mobile"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Invoice" className="mb-3">
              <Form.Control
                name="invoice"
                onChange={handleChange}
                placeholder="Invoice"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="address"
              className="mb-3"
              label="Postal Code"
            >
              <Form.Control
                name="postalCode"
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />
            </FloatingLabel>
            <label className="attach">Attachment</label>
            <FloatingLabel className="mb-3">
              <Form.Control
                name="attachment"
                type="file"
                onChange={selectFile}
                required
              />
            </FloatingLabel>
          </div>
        </div>
        <div>
          <button type="submit" className="buttons" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;


