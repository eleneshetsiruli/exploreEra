import styled from "styled-components";

export const LeftSideInputs = styled.div`
  max-height: 1501px;
  border-radius: 20px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export const InputBoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  width: 380px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;

  input {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const RightSideHotels = styled.div`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 380px;
    height: 285px;
    border-radius: 20px;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 200px;
      height: 200px;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 461px;
  height: 170px;
  justify-content: space-around;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 120px;
  }
`;

export const HotelItemStyle = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  max-width: 1182px;
  border-radius: 20px;
  background-color: white;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 500px;
    flex-direction: column;
  }
`;
export const ShowButton = styled.button`
  max-width: 721px;
  height: 60px;
  border-radius: 20px;
  background-color: #ff6700;
  border: none;
  color: white;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 150px;
  }
`;

export const SearchDivs = styled.div`
  width: 320px;
  height: 41px;
  border-radius: 5px;
  border: 1px solid #ff6700;
  display: flex;
  padding-left: 5px;
  align-items: center;
`;

export const StyledGrid = styled.div`
  max-height: 400px;
  display: grid;
  padding-left: 15px;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const HotelimgStyles = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  img {
    width: 230px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 80px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 180px;
    }
  }
`;

export const HotelDiv = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const HotelGridImg = styled.img`
  height: 400px;
  width: 650px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 200px;
    height: 400px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 480px;
    height: 400px;
  }
`;
export const InputBoxStyle = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
