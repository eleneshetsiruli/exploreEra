import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Burger,
  DropdownMenu,
  Header,
  NavBar,
  NavStyled,
  SignBoxStyle,
  Title,
} from "../homeFolder/homePage/HomeStyles";

export const HeaderComp = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openSignBox, setOpenSignBox] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className={isSticky ? "sticky-header" : ""}> */}
      <div>
        <Header>
          <Title>ExploreEra</Title>

          <NavBar>
            <Burger>
              <GiHamburgerMenu onClick={() => setOpenDropDown(!openDropDown)} />
            </Burger>
            {openDropDown && (
              <DropdownMenu>
                <p>Home</p>
                <p>About us</p>
                <p>Blogs</p>
                <p>Our services</p>
                <p>Our offers</p>
              </DropdownMenu>
            )}
            <NavStyled>Home</NavStyled>
            <NavStyled>About us</NavStyled>
            <NavStyled>Blogs</NavStyled>
            <NavStyled>Our services</NavStyled>
            <NavStyled>Our offers</NavStyled>
            <FiUser
              className="user"
              style={{ color: `${isSticky ? "black" : ""}` }}
              onClick={() => setOpenSignBox(!openSignBox)}
            />
            {openSignBox && <SignBox />}
          </NavBar>
        </Header>
      </div>
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
