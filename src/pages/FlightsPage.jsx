import { LuUser2 } from "react-icons/lu";
import Calendar from "react-calendar";
import { useState } from "react";
import { FlyghtsData } from "../Data";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import line from "../icons/Line.png";
import oneLine from "../icons/oneLine.png";
import twoLine from "../icons/twoLine.png";

import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  AirlineImg,
  BasicContent,
  CalendarStyle,
  FilterTabBt,
  FlexBoxRow,
  FlightInputsStyle,
  NavContainerStyled,
  PriceCalculatorBox,
  ShowResultsButton,
  SideBarFilter,
  SideBarStyled,
  SidebarFirstCont,
  SimpleDivStyle,
  StopsStyled,
} from "../homeFolder/FlightsStyled";
import { RegisterHeaderStyle } from "../homeFolder/RegistrationStyled";
import { StyledButton, Title } from "../homeFolder/homePage/HomeStyles";
import { RangeComponent } from "../components/RangeComponent";

export const FlightsPage = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [stopsQty, setStopsQty] = useState(null);
  const [renderedData, setRenderedData] = useState(FlyghtsData);
  const [displayedItemCount, setDisplayedItemCount] = useState(8);

  const [priceRange, setPriceRange] = useState({
    min: 700,
    max: 3000,
    minValue: 700,
    maxValue: 3000,
  });
  const [rangeValues, setRangeValues] = useState({
    min: 7,
    max: 30,
    minValue: 7,
    maxValue: 30,
  });

  const simulationValues = {
    min: 12,
    max: 24,
    minValue: 12,
    maxValue: 24,
  };
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const filtered = FlyghtsData.filter((item) => {
    return item.date === date.toISOString().split("T")[0];
  });

  const filterHour = renderedData.filter(
    (el) =>
      el.takeOff >= rangeValues.minValue &&
      el.landing <= rangeValues.maxValue &&
      el.price >= priceRange.minValue &&
      el.price <= priceRange.maxValue
  );

  const MyCalendar = () => {
    const handleChange = (date) => {
      setDate(date);
    };

    return (
      <CalendarStyle>
        <Calendar onChange={handleChange} value={date} />
        <p>Selected Date: {date.toLocaleDateString()}</p>
      </CalendarStyle>
    );
  };

  const handleMinChange = (event) => {
    setRangeValues({ ...rangeValues, minValue: event.target.value });
  };

  const handleMaxChange = (event) => {
    setRangeValues({ ...rangeValues, maxValue: event.target.value });
  };

  const handleMinChangePrice = (event) => {
    setPriceRange({ ...priceRange, minValue: event.target.value });
  };

  const handleMaxChangePrice = (event) => {
    setPriceRange({ ...priceRange, maxValue: event.target.value });
  };

  const handleChangeSimulation = () => {
    console.log("not work");
  };

  function handleSearch() {
    setOpenCalendar(false);
    setRenderedData(filtered);
  }

  function handleGoHome() {
    navigate("/");
  }

  function showMoreResults() {
    const remainingItemCount = filterHour.length - displayedItemCount;
    const nextDisplayedItemCount =
      displayedItemCount + Math.min(remainingItemCount, 8);
    setDisplayedItemCount(nextDisplayedItemCount);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f3f3",
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
        <div></div>
        <div></div>
        <div>
          <FaRegCalendarAlt />
          <span>Calendar</span>
          <FaPlus onClick={() => setOpenCalendar(!openCalendar)} />
        </div>

        <StyledButton onClick={handleSearch} fontSize={"18px"}>
          Search
        </StyledButton>
      </FlightInputsStyle>

      <div style={{ alignSelf: "flex-end", marginRight: "30%" }}>
        {openCalendar && <MyCalendar />}
      </div>

      <SimpleDivStyle>
        <SideBarStyled>
          <SidebarFirstCont>
            <p>Cheapest</p>
            <p>Quickest</p>
            <p>best</p>
          </SidebarFirstCont>

          <SideBarFilter>
            <FlexBoxRow>
              <p>Stops</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <StopsStyled>
              <div>
                <input
                  name="stop"
                  onChange={() => setStopsQty(0)}
                  type="checkbox"
                  checked={stopsQty === 0}
                />
                <span>Direct</span>
              </div>
              <div>
                <input
                  name="stop"
                  onChange={() => setStopsQty(1)}
                  type="checkbox"
                  checked={stopsQty === 1}
                />
                <span>One stop</span>
              </div>
              <div>
                <input
                  name="stop"
                  onChange={() => setStopsQty(2)}
                  type="checkbox"
                  checked={stopsQty === 2}
                />
                <span>Two stops</span>
              </div>
            </StopsStyled>

            <FlexBoxRow>
              <p>Times</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <RangeComponent
              text="Take off-Tbilisi"
              minText="12:00"
              maxText="24:00"
              handleMaxChange={handleChangeSimulation}
              handleMinChange={handleChangeSimulation}
              rangeValues={simulationValues}
            />
            <RangeComponent
              text="Take off-Paris"
              minText="12:00"
              maxText="24:00"
              handleMaxChange={handleChangeSimulation}
              handleMinChange={handleChangeSimulation}
              rangeValues={simulationValues}
            />

            <FlexBoxRow>
              <p>Airlines</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <FlexBoxRow>
              <p>Airports</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <FlexBoxRow>
              <p>Duration</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <RangeComponent
              minText="7 Hours"
              maxText="30 Hours"
              userRange={`${rangeValues.minValue}   -    ${rangeValues.maxValue}`}
              handleMaxChange={handleMaxChange}
              handleMinChange={handleMinChange}
              rangeValues={rangeValues}
            />

            <FlexBoxRow>
              <p>Price</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <RangeComponent
              minText="700$"
              maxText="3000$"
              handleMaxChange={handleMaxChangePrice}
              handleMinChange={handleMinChangePrice}
              rangeValues={priceRange}
              userRange={`${priceRange.minValue}  -  ${priceRange.maxValue}`}
            />

            <FlexBoxRow>
              <p>Price Calculator</p>
              <IoIosArrowUp />
            </FlexBoxRow>

            <PriceCalculatorBox>
              <div>
                <h5>Payment method</h5>
                <input placeholder="Choose payment method" />
              </div>
              <div>
                <h5>Checked bag</h5>
                <input placeholder="select bags (0)" />
              </div>
              <div>
                <h5>Carry-on bag</h5>
                <input placeholder="select bags (0)" />
              </div>
            </PriceCalculatorBox>
          </SideBarFilter>
        </SideBarStyled>

        {/* RIGHT BASIC CONTENT */}

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <FilterTabBt>Filters</FilterTabBt>
          {filterHour.slice(0, displayedItemCount).map((el) => (
            <AirlineItem data={el} key={el.id} />
          ))}
          <ShowResultsButton onClick={showMoreResults}>
            Show More Results
          </ShowResultsButton>
        </div>
      </SimpleDivStyle>
      <Footer />
    </div>
  );
};

function AirlineItem({ data }) {
  return (
    <BasicContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "130px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AirlineImg src={data.url} alt="image" />
        <p>{data.title}</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            width: "340px",
            justifyContent: "space-between",
          }}
        >
          <p>Take off</p>
          <p>Landing</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "342px",
            justifyContent: "space-between",
          }}
        >
          <p>{data.takeOff}:00</p>
          <div>
            <img
              src={data.stop === 0 ? line : data.stop === 1 ? oneLine : twoLine}
              alt="img"
            />
          </div>
          <p>{data.landing}:00</p>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "173px",
            borderBottom: "1px solid gray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Price</span>
          <span> {data.price}</span>
        </div>

        <button>View Deal</button>
      </div>
    </BasicContent>
  );
}
