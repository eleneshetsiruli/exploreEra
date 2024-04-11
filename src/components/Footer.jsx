import {
  FooterContact,
  FooterExlpore,
  FooterNavstyle,
} from "../homeFolder/FooterStyles";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import arr from "../icons/arr.png";
import { FooterStyled, Title } from "../homeFolder/homePage/HomeStyles";
export const Footer = () => {
  return (
    <FooterStyled>
      <FooterExlpore>
        <Title>ExploreEra</Title>
        <p>Travel agency which helps you to plan your perfect holidays</p>
        <span>Follow us</span>

        <div>
          <FaInstagram style={{ height: "30px", width: "50px" }} />
          <FaFacebook style={{ height: "30px", width: "50px" }} />
          <FaTwitter style={{ height: "30px", width: "50px" }} />
        </div>
      </FooterExlpore>

      <FooterNavstyle style={{ display: "flex", flexDirection: "column" }}>
        <p>Links</p>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Blogs</a>
        <a href="#">Our services</a>
        <a href="#">Our offers</a>
      </FooterNavstyle>

      <FooterContact>
        <h3>Contact us</h3>
        <p>exploreera@gmail.com</p>
        <p>555111222</p>
        <h3>Subscribe news</h3>
        <button>
          <span>Email</span>
          <img src={arr} alt="" />
        </button>
      </FooterContact>
    </FooterStyled>
  );
};
