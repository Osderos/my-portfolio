import React, { useState,useEffect } from "react";
import { Container } from "../components/Containers/Container";
import uniqid from "uniqid";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import styled from "styled-components";
import StyledButton from "../components/Button/Button";
import { device } from "../utils/mediaQueries";

function Contact() {
  const [visitorMsj, setVisitorMsj] = useState({
    name: "",
    id: uniqid(),
    msj: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    console.log(showModal);
  },[showModal])

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
    toggleModal();
    setTimeout(() => {
      toggleModal();
    }, 2000);
    
  };

  const sendToDb = async () => {
    const msjRef = collection(db, "user-messages");
    await addDoc(msjRef, visitorMsj);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      {showModal ? (
        <div>
          <h1>Thank you for the submit!</h1>
        </div>
      ) : ('')}
      <ContactGroup>
        <h3>Contact</h3>
        <p>
          Please get in touch if you think our work could be mutually beneficial
        </p>
        <p>Email : barda.george@gmail.com</p>
      </ContactGroup>
      <ContactGroup>
        <form onSubmit={handleSubmit}>
          <ContactGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={visitorMsj.name}
              onChange={handleInput}
              minLength="10"
            />
          </ContactGroup>
          <ContactGroup>
            <label htmlFor="message">Leave a message</label>
            <textarea
              id="message"
              name="msj"
              rows="4"
              cols="20"
              value={visitorMsj.msj}
              onChange={handleInput}
              minLength="10"
            ></textarea>
          </ContactGroup>
          <StyledButton
            style={{
              marginLeft: "10%",
              marginTop: "0.5em",
              marginBottom: "1em",
            }}
            type="submit"
          >
            Send
          </StyledButton>
        </form>
      </ContactGroup>
    </Container>
  );
}

export default Contact;

const ContactGroup = styled.div`
  font-family: "Rubik";
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  font-size: 16px;

  label {
    margin-top: 18px;
    padding: 3px;
  }

  h3 {
    font-size: 24px;
  }

  input,
  textarea {
    font-family: "Rubik";
    font-size: 16px;
    padding: 0.5em;
    margin: 0.5em;
    color: #ffc300;
    border-radius: 5px;
  }

  input,
  textarea:invalid {
    border: 2px solid red;
  }

  @media ${device.tablet} {
    align-items: center;
    margin-left: 5em;
  }
`;
