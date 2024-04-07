import React, { useState } from "react";
import {
  AuthBox,
  RegisterHeaderStyle,
} from "../styled-components/RegistrationStyled";
import { Title } from "../styled-components/homePage/HomeStyles";
import { LuUser2 } from "react-icons/lu";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [validate, setValidate] = useState(true);
  const storedData = JSON.parse(localStorage.getItem("unilabAuth"));
  const navigate = useNavigate();

  console.log(storedData);
  function handleSignIn() {
    if (
      authData.email === storedData.email &&
      authData.password === storedData.password
    ) {
      setValidate(true);
      navigate("/");
    } else {
      setValidate(false);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e1e1e4",
        gap: "60px",
      }}
    >
      <RegisterHeaderStyle>
        <Title>ExploreEra</Title>
        <LuUser2 />
      </RegisterHeaderStyle>
      <AuthBox>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <input
            required
            onChange={(ev) =>
              setAuthData({ ...authData, email: ev.target.value })
            }
          />
          <input
            required
            onChange={(ev) =>
              setAuthData({ ...authData, password: ev.target.value })
            }
            type="password"
          />

          {validate ? (
            ""
          ) : (
            <p style={{ color: "red" }}>Email or Password are incorrect</p>
          )}
          <button onClick={handleSignIn}>Submit</button>
        </form>
        <div>
          <div>facebook</div>
          <div>apple</div>
          <div>gmail</div>
          <div>mail</div>
        </div>
        <p>
          By signing in or creating an account,you agree with our terms &
          conditions and provacy
        </p>
      </AuthBox>
      <Footer />
    </div>
  );
};

function PrivacyBox() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}
