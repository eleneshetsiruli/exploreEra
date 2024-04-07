import { FooterStyled, Title } from "../styled-components/homePage/HomeStyles";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <Title>ExploreEra</Title>
        <p>Travel agency which helps you to plan your perfect holidays</p>
        <p>Follow us</p>

        <div>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Links</h3>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Blogs</a>
        <a href="#">Our services</a>
        <a href="#">Our offers</a>
      </div>

      <div>
        <h3>Contact us</h3>
        <p>exploreera@gmail.com</p>
        <p>555111222</p>
        <h3>Subscribe news</h3>
        <button>Email icnon</button>
      </div>

      <h5>Copyright 2024</h5>
    </FooterStyled>
  );
};
