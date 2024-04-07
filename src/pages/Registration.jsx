import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  RegisterHeaderStyle,
  RegistrationForm,
  UserPicture,
} from "../styled-components/RegistrationStyled";
import { Footer } from "../components/Footer";
import { Title } from "../styled-components/homePage/HomeStyles";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineAddAPhoto } from "react-icons/md";

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <RegisterHeaderStyle>
        <Title>ExploreEra</Title>
        <LuUser2 />
      </RegisterHeaderStyle>
      <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid first name",
            },
          })}
          placeholder="First name"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <input
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid LastName",
            },
          })}
          placeholder="lastName"
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />

        {errors.Email && <span>{errors.Email.message}</span>}

        <input
          type="password"
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Password"
        />

        {errors.Password && <span>{errors.Password.message}</span>}

        <input
          type="password"
          {...register("ConfirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("Password") || "Passwords do not match",
          })}
          placeholder="Re-enter your password"
        />

        {errors.ConfirmPassword && (
          <span>{errors.ConfirmPassword.message}</span>
        )}

        {errors.picture && <span>please choose your picture</span>}

        <UserPicture htmlFor="file-upload">
          <MdOutlineAddAPhoto />
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

        <input type="submit" />
      </RegistrationForm>
      <Footer />
    </div>
  );
};
