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
  font-size: 24px;
`;

export const StyledDiscoverSection = styled.section`
  padding-top: 60px;
  width: 100%;
  align-self: center;
  color: #424244;
  display: flex;
  flex-direction: column;

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
    margin-right: 50px;
    color: #c85100;
    text-decoration: underline;
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

  video {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    border-radius: 40px;
  }
`;

export const PopUpBoxStyle = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  background-color: #e8e3e3;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 320px;
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
  }
`;
export const PopularTourStyle = styled.div`
  height: 475.24px;
  margin-top: 12px;
  margin-left: 15px;
  img {
    width: 300px;
    height: 400px;
  }
`;
export const BlogsStyle = styled.div`
  flex-wrap: wrap;
  gap: 40px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
  }
`;

export const BookInputStyled = styled.div`
  background-color: #e0e0e0;
  height: 567px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  height: 435px;
  background-color: #eae9e9;
  margin-top: 60px;
`;

export const SignBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 250px;
  height: 160px;
  background-color: red;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  top: 8%;
  right: 10%;

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
