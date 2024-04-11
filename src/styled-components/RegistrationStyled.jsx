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
`;

export const AuthBox = styled.div`
  width: 540px;
  height: 555px;
  background-color: #ffffff;
  border-radius: 90px;
  align-self: center;
  display: flex;
  flex-direction: column;

  input {
    width: 100px;
  }
`;

export const RegisterInputStyle = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ff6700;
  border-radius: 10px;
  color: gray;
  padding-left: 20px;
`;

export const SubmitBtn = styled.input`
  width: 400px;
  height: 50px;
  color: white;
  background-color: #ff6700;
  border-radius: 10px;
`;
