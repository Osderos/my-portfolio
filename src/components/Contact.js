import React, { useState, useEffect } from "react";
import { Container } from "../components/Containers/Container";
import uniqid from "uniqid";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import styled from "styled-components";
import StyledButton from "../components/Button/Button";
import { device } from "../utils/mediaQueries";
import { SlideButton } from "../components/Animations/Slide";
import { FadeOut } from "../components/Animations/Fade";

function Contact() {
  const [visitorMsj, setVisitorMsj] = useState({
    name: "",
    id: uniqid(),
    msj: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

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
    messageTimer();
  };

  const sendToDb = async () => {
    const msjRef = collection(db, "user-messages");
    await addDoc(msjRef, visitorMsj);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const messageTimer = () => {
    setTimeout(toNull, 2000);
  };

  const toNull = () => {
    setShowModal(null);
  };

  const messageBox = () => {
    if (showModal === true) {
      return (
        <FadeOut>
          <MessageBox>
            <SlideButton>
              <h1>Thank you for the submit!</h1>
            </SlideButton>
          </MessageBox>
        </FadeOut>
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      {messageBox()}
      <ContactGroup>
        <h3 id="contact">Contact</h3>
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
              required={true}
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
              required={true}
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

const MessageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  background-color: #ffc300;
  padding: 10px;
  border-radius: 10px;
  opacity: 0.8;
  background-image: linear-gradient(to bottom, #c70039, rgba(0, 0, 0, 0));
  border: 2px solid white;
  h1 {
    font-family: "Rubik";
  }
`;
