import React from "react";
import { HeaderComp } from "../components/HeaderComp";
import { RegisterHeaderStyle } from "../styled-components/RegistrationStyled";
import { Title } from "../styled-components/homePage/HomeStyles";
import { LuUser2 } from "react-icons/lu";

export const FlightsPage = () => {
  return (
    <div>
      <RegisterHeaderStyle>
        <Title>ExploreEra</Title>
        <LuUser2 />
      </RegisterHeaderStyle>
    </div>
  );
};
