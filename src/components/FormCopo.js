import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import shortid from "shortid";
const FormCopo = (props) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
    setText("");
  };

  return (
    <Form
      className="my-5 justify-content-center d-flex"
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="text"
        className=" me-1  d-inline w-50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Todo"
      />

      <Button onClick={handleSubmit} className="btn">
        Add
      </Button>
    </Form>
  );
};

export default FormCopo;
