import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styled from "styled-components";

function Decoration() {
  return (
    <DecorationContainer>
      <ContactLogo>
        <FontAwesomeIcon
          style={{ zIndex: "9" }}
          icon={solid("envelope")}
        ></FontAwesomeIcon>
      </ContactLogo>
      <Line></Line>
    </DecorationContainer>
  );
}

export default Decoration;

const DecorationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactLogo = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #c70039, rgba(0, 0, 0, 0));
  padding: 26px;
  position: relative;
  color: #ffc300;
`;

const Line = styled.div`
  position: absolute;
  height: 3px;
  width: 75%;
  background-image: linear-gradient(to bottom, #c70039, rgba(0, 0, 0, 0));
`;
