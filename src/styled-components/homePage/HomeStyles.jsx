import { styled } from "styled-components";
import Background from "./homePngs/back.png";

export const Wrapper = styled.section`
  height: 885px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: contain;
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
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 10px;
  }
`;
export const StyledButton = styled.button`
  border-radius: 20px;
  background-color: #ff6700;
  width: 178px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const StyledDiscoverSection = styled.div`
  height: 525px;
  max-width: 1580px;
`;
