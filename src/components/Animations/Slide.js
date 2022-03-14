import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation.styles";

const SlideFromTopAnimation = keyframes`
0%{transform: translateY(-400px); color: transparent}
30%{color: transparent}
100%{transform: translateY(0); color: white}
`;

const SlideFromRightAnimation = keyframes`
0%{transform: translateX(400px); color: transparent}
30%{color: transparent}
100%{transform: translateX(0); color: white}
`;

const SlideFromButtomAnimation = keyframes`
0%{transform: translateY(400px)}
100%{transform: translateY(0)}
`;

const ProfilePictureAnimation = keyframes`
0%{transform: translateX(-400px) rotateZ(0deg)}
50%{transform: rotateZ(90deg)}
100%{transform: translateX(0) rotateZ(360deg)}
`;

const SlideFromTop = styled(BaseAnimation)`
  animation-name: ${SlideFromTopAnimation};
`;

const SlideFromRight = styled(BaseAnimation)`
  animation-name: ${SlideFromRightAnimation};
`;

const SlideButton = styled(BaseAnimation)`
  animation-name: ${SlideFromButtomAnimation};
`;

const ProfilePictureRotate = styled(BaseAnimation)`
  animation-name: ${ProfilePictureAnimation};
`;

export { SlideFromTop, SlideFromRight, SlideButton, ProfilePictureRotate };
