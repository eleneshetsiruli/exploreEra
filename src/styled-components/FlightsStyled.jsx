import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { styled } from "styled-components";

export const NavContainerStyled = styled.div`
  width: 950px;
  height: 58px;
  display: flex;
  margin-top: 60px;
  gap: 40px;
  margin-left: 170px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 300px;
    margin-left: 10px;
    gap: 20px;
  }

  a {
    text-decoration: none;
    width: 140px;
    height: 58px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;
export const FlightInputsStyle = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 112px;
  display: flex;
  justify-content: center;

  div {
    border-radius: 20px;
    width: 300px;
    height: 50px;
    border: none;
    border: 1px solid #ff6700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    gap: 10px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 130px;
      padding: 1px;
    }
  }
`;

export const CalendarStyle = styled.div`
  width: 200px;
  background-color: #cdcdcd;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 5px;
  position: absolute;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 200px;
    left: 100px;
  }

  .react-calendar__tile--active {
    background-color: #ff6700 !important;
    color: #fff !important;
  }
  .react-calendar__navigation {
    display: flex;
  }

  .react-calendar__navigation__label {
    font-size: 18px;
    color: #d6a07c;
  }

  .react-calendar__navigation button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    padding: 5px;
  }

  .react-calendar__tile {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 30px;
    height: 30px;
  }
`;

export const SimpleDivStyle = styled.div`
  display: flex;
  padding: 15px;
  gap: 20px;
`;

export const FilterTabBt = styled.button`
  width: 780px;
  height: 50px;
  color: white;
  background-color: #ff6700;
  border-radius: 10px;
  border: none;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 350px;
  }
`;

export const SideBarStyled = styled.div`
  width: 380px;
  height: 1693;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export const SidebarFirstCont = styled.div`
  width: 380px;
  height: 219px;
  background-color: white;
  border-radius: 20px;

  p:first-child,
  p:nth-child(2) {
    border-bottom: 1px solid #ff6700;
    width: 129px;
  }

  p {
    font-size: 28px;
    padding-top: 30px;
    padding-bottom: 5px;
    margin-left: 30px;
  }
`;
export const SideBarFilter = styled.div`
  background-color: white;
  width: 380px;
  max-height: 1434px;
  border-radius: 20px;
  padding: 20px 28px 0px 30px;

  p {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px;
  height: 50px;
`;

export const StopsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 20px;

  div {
    display: flex;
    gap: 20px;
  }
`;

export const RangeBox = styled.div`
  max-width: 300px;
  background-color: #fff;
  position: relative;
  margin-left: 10px;
`;
export const StyledRangeInput = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1px;
  background: #c85100;
  border-radius: 5px;
  outline: none;
  margin: 10px 0px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 2px solid #c85100;

    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: orange;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
`;
export const StyledRangeInputMin = styled(StyledRangeInput)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledRangeInputMax = styled(StyledRangeInput)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PriceCalculatorBox = styled.div`
  display: flex;
  width: 300px;
  height: 355px;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    width: 264px;
    height: 43px;
  }
`;

export const BasicContent = styled.div`
  display: flex;
  font-family: "Inter", sans-serif;
  max-width: 1180px;
  height: 192px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 68px;
  padding: 36px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    background-color: #ff8c3e;
    flex-direction: column;
    gap: 10px;
    padding: 2px;
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 780px;
  }

  :first-child img {
    width: 70px;
  }
  button {
    background-color: #ff8c3e;
    border: none;
    width: 173px;
    height: 44px;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
export const ShowResultsButton = styled.button`
  max-width: 1180px;
  height: 74px;
  background-color: #ff6700;
  color: white;
  border-radius: 20px;
  border: none;
`;
export const AirlineImg = styled.img`
  width: 10px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
