import {
  BookInputStyled,
  OrangeButton,
  SelectContent,
  SmallInputDivs,
} from "../homeFolder/homePage/HomeStyles";

export const BookInputs = () => {
  return (
    <BookInputStyled>
      <p>Ready To Book A Trip?</p>
      <div>
        <SmallInputDivs>
          <SelectContent>
            <option>Your starting location</option>
            <option>Usa</option>
            <option>Georgia</option>
            <option>Rome</option>
            <option>Italy</option>
            <option>Prague</option>
          </SelectContent>

          <SelectContent>
            <option>Choose date</option>
            <option>12:04:2024</option>
            <option>13:04:2024</option>
          </SelectContent>
        </SmallInputDivs>

        <SmallInputDivs>
          <SelectContent>
            <option>Choose a tour offer</option>
            <option>Italy tour</option>
            <option>Rome tour</option>
          </SelectContent>

          <SelectContent>
            <option>Persons</option>
            <option>2</option>
            <option>3</option>
          </SelectContent>
        </SmallInputDivs>
      </div>
      <OrangeButton>Book Now</OrangeButton>
    </BookInputStyled>
  );
};
