import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./single.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function SingleRecord() {
  const info = useLocation();
  const { state } = info;
  const { data } = state;
  const { foundUser } = data;

  return (
    <div className="view">
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.name}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.email}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.address}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="mobile" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.mobile}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.name}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Postal Code"
        className="mb-3"
      >
        <Form.Control
          type="text"
          value={foundUser.postalCode}
          name="name"
          placeholder="Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Invoice" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.invoice}
          name="name"
          placeholder="Invoice"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Corporate Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          value={foundUser.corporateName}
          name="name"
          placeholder="Corporate Name"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Billing" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.billing}
          name="name"
          placeholder="Billing"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Attachment" className="mb-3">
        <Form.Control
          type="text"
          value={foundUser.fileName}
          name="file"
          placeholder="Attachment"
          required
        />
      </FloatingLabel>
    </div>
  );
}

export default SingleRecord;
