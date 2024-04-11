import { Discover } from "../components/Discover";

import {
  Wrapper,
  StyledBox,
  StyledButton,
} from "../styled-components/homePage/HomeStyles";
import { HeaderComp } from "../components/HeaderComp";

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
