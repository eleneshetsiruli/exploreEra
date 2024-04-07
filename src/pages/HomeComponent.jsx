import vectorImage from "../styled-components/homePage/homePngs/Vector.png";
import { Discover } from "../components/Discover";

import {
  Header,
  NavBar,
  NavStyled,
  Title,
  Wrapper,
  StyledImage,
  StyledBox,
  StyledButton,
  SignBoxStyle,
} from "../styled-components/homePage/HomeStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HomeComponent = () => {
  const [openSignBox, setOpenSignBox] = useState(false);
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

            <StyledImage
              onClick={() => setOpenSignBox(!openSignBox)}
              src={vectorImage}
            ></StyledImage>
          </NavBar>
        </Header>

        <StyledBox>
          {openSignBox && <SignBox />}
          <p>Visit Mountains In</p>
          <span>ITALY</span>
          <StyledButton>See offer</StyledButton>
        </StyledBox>
      </Wrapper>
      <Discover />
    </>
  );
};

function SignBox() {
  return (
    <SignBoxStyle>
      <Link to={"signIn"}>
        <button>Sign in</button>
      </Link>
      <Link to={"registration"}>
        <button>Sign up</button>
      </Link>
      <button>Sign out</button>
    </SignBoxStyle>
  );
}
