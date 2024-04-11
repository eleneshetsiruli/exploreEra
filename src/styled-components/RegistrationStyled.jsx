import { styled } from "styled-components";
export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  border-radius: 10px;
  padding: 50px 70px;
  background-color: #ffffff;
  gap: 20px;
`;

export const RegisterHeaderStyle = styled.header`
  background-color: #eae9e9;
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 170px;
`;

export const UserPicture = styled.label`
  width: 101px;
  height: 100px;
  background-color: #e6ebff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-start;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const AuthBox = styled.div`
  width: 540px;
  height: 555px;
  background-color: #ffffff;
  border-radius: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 340px;
  }
`;

export const RegisterInputStyle = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ff6700;
  border-radius: 10px;
  color: gray;
  padding-left: 20px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const SubmitBtn = styled.input`
  width: 400px;
  height: 50px;
  color: white;
  background-color: #ff6700;
  border-radius: 10px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 200px;
  }
`;
export const SubBtn = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  background-color: #ff6700;
  color: white;
  border: none;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 200px;
  }
  &:hover {
    background-color: #b74b03;
  }
`;

export const PrivacyBoxStyle = styled.div`
  width: 600px;
  height: 610px;
  border-radius: 15px;
  background-color: white;
  z-index: 10;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  top: 0;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 200px;
  }
`;
