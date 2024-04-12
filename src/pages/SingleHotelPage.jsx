import { NavLink, useParams } from "react-router-dom";

import { LuUser2 } from "react-icons/lu";

import { useNavigate } from "react-router-dom";

import { HotelsData } from "../Data";
import map from "../icons/map.png";
import hotel2 from "../icons/hotel2.png";
import hotel from "../icons/hotel1.png";
import hotel3 from "../icons/hotel3.png";
import img1 from "../icons/img1.png";
import img2 from "../icons/img2.png";
import img3 from "../icons/img3.png";
import img4 from "../icons/img4.png";
import { Footer } from "../components/Footer";

import {
  HotelDiv,
  HotelGridImg,
  HotelimgStyles,
  InputBoxStyle,
  SearchDivs,
  StyledGrid,
} from "../homeFolder/HotelsStyles";
import { RegisterHeaderStyle } from "../homeFolder/RegistrationStyled";
import { Title } from "../homeFolder/homePage/HomeStyles";
import { NavContainerStyled } from "../homeFolder/FlightsStyled";

export const SingleHotelPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  function handleGoHome() {
    navigate("/");
  }
  const FacilitiesData = [
    "Private pool",
    "Terrace",
    "Kitchen",
    "1 Badroom",
    "2 Bathroom",
    "kids play space",
    "Billiard room",
    "Private gym",
  ];
  const filteterdData = HotelsData.filter((el) => el.id == params.id);

  return (
    <div
      style={{
        backgroundColor: "gray",
        background: "#cdcdcd",
      }}
    >
      <RegisterHeaderStyle>
        <Title onClick={handleGoHome}>ExploreEra</Title>

        <LuUser2 />
      </RegisterHeaderStyle>

      <NavContainerStyled>
        <NavLink to="/flights">Flights</NavLink>
        <NavLink to={"/Stays"}>Stays</NavLink>
        <NavLink to={"/rentals"}>Car rentals</NavLink>
        <NavLink to={"/Cruises"}>Cruises</NavLink>
        <NavLink to={"/attractions"}>Attractions</NavLink>
      </NavContainerStyled>

      <HotelDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "380px",
            gap: "20px",
          }}
        >
          <InputBoxStyle>
            <SimpleInputBox input="Auckland,New Zaaland" title="Destination" />
            <SimpleInputBox
              input="Auckland,New Zaaland"
              title="Check-in date"
            />
            <SimpleInputBox
              input="Auckland,New Zaaland"
              title="Check-out date"
            />
            <SimpleInputBox input="Auckland,New Zaaland" title="Persons" />
          </InputBoxStyle>

          <img src={map} alt="img" />

          <div
            style={{
              background: "white",
              width: "380px",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            {FacilitiesData.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </div>
        </div>
        <div>
          {filteterdData.map((el) => (
            <SimpleHotel data={el} key={el.id} />
          ))}
        </div>
      </HotelDiv>
      <Footer />
    </div>
  );
};

function SimpleHotel({ data }) {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < data.rating; i++) {
      stars.push(
        <span style={{ color: "#FF6700" }} key={i}>
          &#9733;
        </span>
      );
    }
    return stars;
  };
  return (
    <div style={{ width: "500px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
        }}
      >
        <h2>{data.title}</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <small>Rating:</small>
          <span>{generateStars()}</span>
        </div>
      </div>
      <div>
        <StyledGrid>
          <HotelGridImg src={hotel} alt="img" />
          <img
            style={{ width: "300px", height: "190px" }}
            src={hotel2}
            alt="img"
          />
          <img
            style={{ width: "300px", height: "190px" }}
            src={hotel3}
            alt="img"
          />
        </StyledGrid>
        <HotelimgStyles>
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </HotelimgStyles>
        <p style={{ width: "800px", margin: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          laboriosam sunt hic, animi consequuntur fugit ipsum numquam qui
          voluptatum molestias quisquam neque modi corporis voluptates provident
          similique autem ipsam asperiores?
        </p>
      </div>
    </div>
  );
}
function SimpleInputBox({ title, input }) {
  return (
    <div>
      <small>{title}</small>
      <SearchDivs>{input}</SearchDivs>
    </div>
  );
}
