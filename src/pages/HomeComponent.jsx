import React from "react";
import vectorImage from "../styled-components/homePage/homePngs/Vector.png";

import {
  Header,
  NavBar,
  NavStyled,
  Title,
  Wrapper,
  StyledImage,
  StyledBox,
  StyledButton,
} from "../styled-components/homePage/HomeStyles";
import { Discover } from "../components/Discover";

export const HomeComponent = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>ExploreEra</Title>
          <NavBar>
            <NavStyled>Home</NavStyled>
            <NavStyled>About us</NavStyled>
            <NavStyled>Blogs</NavStyled>
            <NavStyled>Our services</NavStyled>
            <NavStyled>Our offers</NavStyled>
            <StyledImage src={vectorImage}></StyledImage>
          </NavBar>
        </Header>
        <StyledBox>
          <p>Visit Mountains In</p>
          <span>ITALY</span>
          <StyledButton>See offer</StyledButton>
        </StyledBox>
      </Wrapper>
      <Discover />
    </>
  );
};
