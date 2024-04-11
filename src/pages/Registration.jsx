import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";

import { LuUser2 } from "react-icons/lu";
import { MdOutlineAddAPhoto } from "react-icons/md";
import {
  RegisterHeaderStyle,
  RegisterInputStyle,
  RegistrationForm,
  SubmitBtn,
  UserPicture,
} from "../homeFolder/RegistrationStyled";
import { Title } from "../homeFolder/homePage/HomeStyles";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem(
      "unilabAuth",
      JSON.stringify({
        email: data.Email,
        password: data.Password,
      })
    );
    navigate("/signin");
  };
  function handleGoHome() {
    navigate("/");
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
          justifyContent: "center",
          flexDirection: "column",
          background: "#edebeb",
          alignItems: "center",
        }}
      >
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>First Name</small>

            <RegisterInputStyle
              {...register("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid first name",
                },
              })}
              placeholder="Enter your First name"
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Last Name</small>
            <RegisterInputStyle
              {...register("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid LastName",
                },
              })}
              placeholder="Enter your lastName"
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName.message}</span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Email</small>
            <RegisterInputStyle
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your Email address"
            />

            {errors.Email && (
              <span style={{ color: "red" }}>{errors.Email.message}</span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Password</small>
            <RegisterInputStyle
              type="password"
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your Password"
            />

            {errors.Password && (
              <span style={{ color: "red" }}>{errors.Password.message}</span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Confirm the password</small>
            <RegisterInputStyle
              type="password"
              {...register("ConfirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("Password") || "Passwords do not match",
              })}
              placeholder="Re-enter your password"
            ></RegisterInputStyle>

            {errors.ConfirmPassword && (
              <span style={{ color: "red" }}>
                {errors.ConfirmPassword.message}
              </span>
            )}
          </div>

          {errors.picture && (
            <span style={{ color: "red" }}>please choose your picture</span>
          )}

          <UserPicture htmlFor="file-upload">
            <MdOutlineAddAPhoto
              style={{ height: "50px", width: "50px", color: "#FF6700" }}
            />
          </UserPicture>

          <input
            id="file-upload"
            type="file"
            {...register("picture", {
              required: true,
              message: "please choose your picture",
            })}
            style={{ display: "none" }}
          />

          <SubmitBtn type="submit" />
        </RegistrationForm>
        <Footer />
      </div>
    </>
  );
};
