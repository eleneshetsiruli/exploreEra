import React, { useState } from "react";
import {
  FlexBoxRow,
  RangeBox,
  StyledRangeInputMax,
  StyledRangeInputMin,
} from "../styled-components/FlightsStyled";

export const RangeComponent = ({
  text,
  minText,
  maxText,
  userRange,
  handleMinChange,
  handleMaxChange,
  rangeValues,
}) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <small>{text}</small>
      <FlexBoxRow>
        <span>{minText}</span>
        <span>{userRange}</span>
        <span>{maxText}</span>
      </FlexBoxRow>
      <RangeBox>
        <StyledRangeInputMin
          onChange={handleMinChange}
          min={rangeValues.min} //
          max={rangeValues.max} //
          value={rangeValues.minValue} //
        />

        <StyledRangeInputMax
          onChange={handleMaxChange}
          min={rangeValues.min} //
          max={rangeValues.max} //
          value={rangeValues.maxValue} //
        />
      </RangeBox>
    </div>
  );
};
