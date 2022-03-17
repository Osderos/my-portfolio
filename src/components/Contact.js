import React, { useState } from "react";
import { Container } from "../components/Containers/Container";
import uniqid from "uniqid";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [visitorMsj, setVisitorMsj] = useState({
    name: "",
    id: uniqid(),
    msj: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setVisitorMsj({ ...visitorMsj, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendToDb().then(() =>
      setVisitorMsj({
        name: "",
        id: uniqid(),
        msj: "",
      })
    );
  };

  const sendToDb = async () => {
    const msjRef = collection(db, "user-messages");
    await addDoc(msjRef, visitorMsj);
  };

  return (
    <Container>
      <div>
        <h3>Contact</h3>
        <p>Email : barda.george@gmail.com</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={visitorMsj.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="message">Send a message</label>
            <textarea
              id="message"
              name="msj"
              rows="4"
              cols="40"
              value={visitorMsj.msj}
              onChange={handleInput}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
