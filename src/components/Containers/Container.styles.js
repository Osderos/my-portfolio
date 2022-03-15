import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(42, 13, 40), rgb(6, 13, 40));
  color: white;
  width: 75%;
  margin: auto;
  padding: 2em;
  gap: 2em;

  @media ${device.laptop} {
    justify-content: flex-start;
    padding: 0px;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
  }
`;

export const MainWrapper = styled(HomeWrapper)`
  min-height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.laptop} {
    justify-content: flex-start;
    padding: 0px;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
  }
`;
