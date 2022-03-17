import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 50px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const PortfolioContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  height:400px;
  margin-bottom: 200px;
  padding-top: 200px;
`;

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
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-start;
    padding: 0px;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 50%;
  padding: 1rem;
  color: white;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #c70039, rgba(0, 0, 0, 0)) 1 100%;

  p {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    word-spacing: 2px;
    font-style: italic;
  }

  @media ${device.tablet} {
    width: 75%;
    padding-top: 10px;
  }
`;
