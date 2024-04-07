import { BookInputStyled } from "../styled-components/homePage/HomeStyles";

export const BookInputs = () => {
  return (
    <BookInputStyled>
      <h1>Ready To Book A Trip?</h1>
      <div>
        <select>
          <option>Your starting location</option>
        </select>
        <select>
          <option>Choose date</option>
        </select>
        <select>
          <option>Choose a tour offer</option>
        </select>
        <select>
          <option>Persons</option>
        </select>
      </div>
      <button>Book Now</button>
    </BookInputStyled>
  );
};
