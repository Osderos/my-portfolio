import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../utils/mediaQueries";
import { BurgerButton } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigate = useNavigate();

  const toHome = () => navigate("/");

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <NavigationBar>
      <AccesGroup>
        <a href="https://github.com/Osderos">
          <i className="devicon-github-original"></i>
        </a>
        <a href="https://www.linkedin.com/feed/">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </AccesGroup>
      <AccesGroup>
        <NavGroup>
          <span onClick={toHome}>Home</span>
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </NavGroup>
        <Dropdown>
          <BurgerButton onClick={handleToggle}>
            <FontAwesomeIcon icon={solid("bars")} />
          </BurgerButton>
          <NavigationMenu value={navbarOpen ? "block" : "none"}>
            <li onClick={toHome}>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </NavigationMenu>
        </Dropdown>
      </AccesGroup>
    </NavigationBar>
  );
}

export default Navbar;

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  font-size: 24px;
  color: white;
  padding: 10px;
 
  

  @media ${device.laptop} {
    justify-content: space-around;
    width: 100%;
  }
`;

const AccesGroup = styled.div`
  display: flex;
  gap: 1em;
  font-family: "Audiowide", cursive;
  align-items: center;

  i,
  span,
  a {
    font-size: 28px;
    transition: all 0.5s ease;
    &:hover {
      cursor: pointer;
      color: #ffc300;
      transform: translateY(-2px);
    }
  }

  a {
    color: #c70039;
    text-decoration: none;
  }
`;

const NavigationMenu = styled.ul`
  font-size: 18px;
  list-style: none;
  position: absolute;
  display: ${(props) => props.value};
  padding: 0px;
  overflow: hidden;
  max-width: 250px;
  z-index: 9;
  color: #c70039;
  padding: 5px;
`;

const NavGroup = styled.div`
  display: flex;
  gap: 10px;

  @media ${device.tablet} {
    display: none;
  }
`;
const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
