import React, { useState } from "react";

import { LuUser2 } from "react-icons/lu";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  AuthBox,
  PrivacyBoxStyle,
  RegisterHeaderStyle,
  RegisterInputStyle,
  SubBtn,
} from "../homeFolder/RegistrationStyled";
import { Title } from "../homeFolder/homePage/HomeStyles";

export const SignIn = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [validate, setValidate] = useState(false);
  const [open, SetOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("unilabAuth"));
  const navigate = useNavigate();

  console.log(storedData);

  function handleGoHome() {
    navigate("/");
  }

  function handleSignIn() {
    if (
      agree &&
      authData.email === storedData.email &&
      authData.password === storedData.password
    ) {
      setValidate(true);
      navigate("/flights");
    } else {
      setValidate(false);
    }
  }
  return (
    <>
      <RegisterHeaderStyle>
        <Title onClick={handleGoHome}>ExploreEra</Title>
        <LuUser2 />
      </RegisterHeaderStyle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e1e1e4",
          gap: "60px",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          position: "relative",
        }}
      >
        <AuthBox>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            onSubmit={(ev) => ev.preventDefault()}
          >
            <small>Email</small>
            <RegisterInputStyle
              required
              onChange={(ev) =>
                setAuthData({ ...authData, email: ev.target.value })
              }
            />
            <small>Password</small>
            <RegisterInputStyle
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

            <SubBtn onClick={handleSignIn}>Submit</SubBtn>
          </form>

          <small>
            By signing in or creating an account,you agree with our terms &
            conditions and provacy
          </small>
          <span
            onClick={() => SetOpen(true)}
            style={{
              color: "#ff6700",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Terms & conditions and Privacy policy
          </span>
        </AuthBox>

        {open && <PrivacyBox SetOpen={SetOpen} setAgree={setAgree} />}
        <Footer />
      </div>
    </>
  );
};

function PrivacyBox({ SetOpen, setAgree }) {
  function handleClick() {
    SetOpen(false);
    setAgree(true);
  }
  return (
    <PrivacyBoxStyle>
      <h1>Terms and conditions</h1>
      <p>
        Before you use our website or services, please carefully read the
        following Terms and Conditions. By accessing or using our platform, you
        agree to comply with and be bound by these terms. If you do not agree
        with any part of these terms, please do not use our services. Your
        privacy is important to us. Please review our Privacy Policy to
        understand how we collect, use, and disclose information about you. By
        using our services, you consent to our privacy practices.
      </p>
      <SubBtn onClick={handleClick}>I agree</SubBtn>
    </PrivacyBoxStyle>
  );
}
