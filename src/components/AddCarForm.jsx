import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddCarForm = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputSeats = useRef();
  const inputFrom = useRef();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !inputName.current.value.length ||
      !inputEmail.current.value.length ||
      !inputSeats.current.value.length ||
      !inputFrom.current.value.length
    ) {
      return;
    }

    // creating firestore doc
    await addDoc(collection(db, "carpool"), {
      name: inputName.current.value,
      email: inputEmail.current.value,
      from: inputFrom.current.value,
      seats: inputSeats.current.value,
    });

    // emptying input fields
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputFrom.current.value = "";
    inputSeats.current.value = "";
    setMessage(
      "Din bil har lagts till! Uppdatera sidan för att se att det har registrerats."
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-4 mb-3" controlId="name">
        <Form.Control
          type="text"
          ref={inputName}
          placeholder="Ditt namn"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          type="text"
          ref={inputEmail}
          placeholder="Email eller mobilnummer"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="from">
        <Form.Control
          type="text"
          ref={inputFrom}
          placeholder="Staden du utgår ifrån"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="seats">
        <Form.Control
          type="text"
          ref={inputSeats}
          placeholder="Antal lediga säten i din bil"
          required
        />
      </Form.Group>

      <Button type="submit" className="button">
        Lägg till bilplatser
      </Button>

      {message && <p style={{ paddingTop: "1.2em" }}>{message}</p>}
    </Form>
  );
};

export default AddCarForm;
