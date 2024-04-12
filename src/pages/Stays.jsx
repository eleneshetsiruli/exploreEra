import { RegisterHeaderStyle } from "../homeFolder/RegistrationStyled";
import {
  SmallInputDivs,
  StyledButton,
  Title,
} from "../homeFolder/homePage/HomeStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

import {
  FlightInputsStyle,
  NavContainerStyled,
} from "../homeFolder/FlightsStyled";

import {
  HotelItemStyle,
  InputBoxStyles,
  LeftSideInputs,
  RightSideHotels,
  ShowButton,
  TextContent,
} from "../homeFolder/HotelsStyles";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { HotelsData } from "../Data";

export const Stays = () => {
  const [starValue, setStarValue] = useState(0);

  const filtered =
    starValue !== 0
      ? HotelsData.filter((el) => el.rating === starValue)
      : HotelsData;

  const navigate = useNavigate();

  function handleChange(ev) {
    setStarValue(parseInt(ev.target.value));
  }
  function handleGoHome() {
    navigate("/");
  }

  return (
    <div
      style={{
        backgroundColor: " #f0f0f0",
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
      <FlightInputsStyle>
        <div>Choose city</div>
        <div>mm/dd/yyyy</div>
        <div>adults</div>

        <StyledButton>Search</StyledButton>
      </FlightInputsStyle>
      <div style={{ display: "flex" }}>
        <LeftSideInputs>
          <InputBox
            value1="Hotel"
            value2="Apartment"
            value3="Villa"
            value4="Guest
            house"
            value5="Resort"
            title="Property type"
          ></InputBox>
          <InputBox
            onChange={handleChange}
            value1="5 Stars"
            value2="4 Stars"
            value3="3 Stars"
            value4="2 Stars"
            value5="1 Stars"
            title="Property rating"
          >
            /
          </InputBox>
          <InputBox
            value1="Wifi"
            value2="Parking"
            value3="Pets allowed"
            value4="Fitness center"
            value5="Swimming pool"
            title="Facilities"
          ></InputBox>
          <InputBox
            value1="Balcony"
            value2="TV"
            value3="Kitchen"
            value4="Air conditioning"
            value5="Washing machine"
            title="Room facilities"
          ></InputBox>
          /
        </LeftSideInputs>
        <RightSideHotels>
          {filtered.map((el) => (
            <HotelItem data={el} key={el.id} />
          ))}
        </RightSideHotels>
      </div>
      <Footer />
    </div>
  );
};

function HotelItem({ data }) {
  const navigate = useNavigate();

  function handleShowMore() {
    navigate(`/singleHotel/${data.id}`);
  }
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
    <HotelItemStyle>
      <img src={data.url} alt="img" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <TextContent>
            <h3>{data.title}</h3>
            <small>{data.text}</small>
          </TextContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
              justifyContent: "center",
            }}
          >
            <p>Raiting</p>
            <span>{generateStars()}</span>
            <span>Price:</span>
            <h3>{data.price}</h3>
          </div>
        </div>
        <ShowButton onClick={handleShowMore}>Show details</ShowButton>
      </div>
    </HotelItemStyle>
  );
}

function InputBox({ title, value1, value2, value3, value4, value5, onChange }) {
  return (
    <InputBoxStyles>
      <h3>{title}</h3>
      <div>
        <input onChange={onChange} value={value1} type="checkbox" />
        <span>{value1}</span>
      </div>

      <div>
        <input onChange={onChange} value={value2} type="checkbox" />
        <span>{value2}</span>
      </div>

      <div>
        <input onChange={onChange} value={value3} type="checkbox" />
        <span>{value3}</span>
      </div>

      <div>
        <input onChange={onChange} value={value4} type="checkbox" />
        <span>{value4}</span>
      </div>
      <div>
        <input onChange={onChange} value={value5} type="checkbox" />
        <span>{value5}</span>
      </div>
    </InputBoxStyles>
  );
}
