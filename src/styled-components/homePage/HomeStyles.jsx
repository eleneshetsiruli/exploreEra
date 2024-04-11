import { styled } from "styled-components";
import Background from "./homePngs/back.png";

export const Wrapper = styled.section`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  max-width: 100%;
  height: 105px;
  color: #ffffff;
  display: flex;
  padding: 10px 80px;
  display: flex;
  align-items: center;
  gap: 300px;
`;

export const Title = styled.h1`
  height: 65px;
  font-size: 48px;
  font-weight: 400;
  font-family: "Kalnia", serif;
  cursor: pointer;
`;

export const NavStyled = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
`;
export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
`;
export const StyledImage = styled.img`
  height: 20px;
`;

export const StyledBox = styled.div`
  align-self: center;
  padding-top: 243px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;

  p:first-child {
    font-weight: 400;
    font-size: 40px;
    width: 324px;
    height: 47px;
  }
  span {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 10px;
  }
`;
export const StyledButton = styled.button`
  border-radius: 20px;
  background-color: #ff6700;
  width: 158px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.fontSize || "28px"};

  &:hover {
    background-color: #c85100;
  }
`;

export const StyledDiscoverSection = styled.section`
  padding-top: 60px;
  width: 100%;
  align-self: center;
  color: #424244;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;

  p:first-child {
    font-size: 40px;
    font-weight: 400;
  }
  p:nth-child(2) {
    font-size: 16px;
    padding-top: 20px;
  }
  span {
    align-self: flex-end;
    color: #c85100;
    text-decoration: underline;
    margin-bottom: 5px;
    cursor: pointer;
  }
  img {
    width: 290px;
    height: 248px;
    border-radius: 20px;
  }
`;
export const DiscoverContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const WatchContainer = styled.div`
  color: #424244;
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    border-radius: 40px;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    border: none;
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
  }
`;

export const PopUpBoxStyle = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  background-color: #f8f5f5;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 320px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  div {
    width: 180px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div p {
    color: red;
    display: none;
  }
  div h1 {
    font-size: 10px;
  }
  img {
    width: 110px;
    height: 80px;
  }
  button {
    background-color: #ec5454;
    color: white;
    width: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50px;
    border: none;
  }
`;
export const PopularTourStyle = styled.div`
  height: 475px;
  padding-top: 12px;
  margin-left: 15px;
  img {
    width: 250px;
    height: 300px;
  }
`;
export const BlogsStyle = styled.div`
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 200px;
  }
`;

export const BookInputStyled = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  p {
    align-self: flex-start;
    padding-left: 200px;
    font-size: 30px;
  }
  div {
    display: flex;
    gap: 80px;
    margin-top: 20px;
  }
`;

export const SmallInputDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  height: 435px;
  background-color: #eae9e9;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 170px 10px 170px;
`;

export const SignBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 250px;
  height: 160px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 2;

  button {
    width: 247px;
    height: 48px;
    border-bottom: 2px solid orange;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: white;
  }
`;

export const SelectContent = styled.select`
  width: 453px;
  height: 50px;
  border-radius: 10px;
  padding-left: 20px;
  border: none;
`;

export const OrangeButton = styled.button`
  height: 60px;
  border-radius: 20px;
  background-color: #ff6700;
  width: 1000px;
  margin-top: 30px;
  color: white;
  border: none;

  &:hover {
    background-color: #c85100;
    color: black;
  }
`;
