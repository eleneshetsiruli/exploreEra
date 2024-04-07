import {
  Header,
  NavBar,
  NavStyled,
  Title,
} from "../styled-components/homePage/HomeStyles";

export const HeaderComp = () => {
  return (
    <Header>
      <Title>ExploreEra</Title>
      <NavBar>
        <NavStyled>Home</NavStyled>
        <NavStyled>About us</NavStyled>
        <NavStyled>Blogs</NavStyled>
        <NavStyled>Our services</NavStyled>
        <NavStyled>Our offers</NavStyled>
      </NavBar>
    </Header>
  );
};
