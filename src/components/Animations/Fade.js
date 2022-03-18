import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation.styles";

const FadeOutAnimation = keyframes`
0%{opacity:0}
25%{opacity:0.25}
50%{opacity:0.5}
100%{opacity:1}
`;

const FadeOut = styled(BaseAnimation)`
  animation-name: ${FadeOutAnimation};
`;

export {FadeOut}