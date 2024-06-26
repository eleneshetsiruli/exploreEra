import { Discover } from "../components/Discover";

import { HeaderComp } from "../components/HeaderComp";
import {
  StyledBox,
  StyledButton,
  Wrapper,
} from "../homeFolder/homePage/HomeStyles";

export const HomeComponent = () => {
  return (
    <>
      <Wrapper>
        <HeaderComp />
        <StyledBox>
          <div>
            <p>Visit Mountains In</p>
            <span>ITALY</span>
          </div>
          <StyledButton>See offer</StyledButton>
        </StyledBox>
      </Wrapper>
      <Discover />
    </>
  );
};
