import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

export const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid #c70039;
  color: #c70039;
  font-size: 18px;
  font-family: "Audiowide";
  padding: 5px;
  transition: all 0.5s ease;

  &:hover{
    cursor: pointer;
    border-color: white;
    color:white;
    transform: translateY(-2px);
    box-shadow:0px 2px 2px white;
  }
`;

export const BurgerButton=styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #c70039;
  color: #c70039;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  display: none;

  @media ${device.tablet}{
    display: block;
  }
`