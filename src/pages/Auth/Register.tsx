import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance, { apiUrl } from "../../services/axiosInstance";
import { namePattern, passwordPattern } from "../../utils/validator";
import Auth_Header from "../../components/layout/header/Auth_Header";
import Form from "../../components/layout/form/Form";
import Button from "../../components/layout/button/Button";
import { GoogleIcon } from "../../assets/icons/Icon";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // ___________________ use form ____________________
  const {
    control,
    setError,
    reset,
    formState: { errors, dirtyFields, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: { full_name: "", email: "", password: "" },
    mode: "onChange",
  });
  // ___________________ list ____________________
  const formList = [
    {
      id: 0,
      formType: "input",
      fieldName: "full_name",
      validator: {
        required: "Full name is required",
        pattern: {
          value: namePattern,
          message: "Please enter a valid name, e.g., John Doe.",
        },
        maxLength: {
          value: 100,
          message: "Full name should be less than 100 characters",
        },
        minLength: {
          value: 3,
          message: "Full name should be at least 3 characters long",
        },
      },
      label: "full name",
      placeholder: "Full name",
      type: "text",
    },
    {
      id: 1,
      formType: "input",
      fieldName: "email",
      type: "email",
      validator: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Please enter a valid email, e.g., example@domain.com.",
        },
      },
      label: "email",
      placeholder: "email",
    },
    {
      id: 2,
      formType: "password",
      fieldName: "password",
      validator: {
        required: "Password is required",
        pattern: {
          value: passwordPattern,
          message:
            "Password must be 8+ characters, with uppercase, lowercase, a number, and a special character.",
        },
      },
      placeholder: "********",
      label: "password",
    },
  ];
  // ___________________ login ____________________

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/auth/register", data);
      if (response?.status === 201) {
        navigate("/account");
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.errors?.includes("Email already exists")) {
        setError("email", {
          type: "manual",
          message: "Email already exists",
        });
      } else if (
        err?.response?.data?.errors?.includes("Please enter a valid email")
      ) {
        setError("email", {
          type: "manual",
          message: "Please enter a valid email, e.g., example@domain.com.",
        });
      } else if (err?.response?.data?.errors?.includes("Weak password.")) {
        setError("password", {
          type: "manual",
          message: err?.response?.data?.errors,
        });
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleGoogle = () => {
    window.location.href = `${apiUrl}/api/auth/google`;
  };
  return (
    <div className="flex flex-col gap-8">
      <Auth_Header
        title="Create account"
        des="Let’s get you started sharing your links!"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Form
          formList={formList}
          control={control}
          errors={errors}
          loading={loading}
        />
        <Button loading={loading} buttonType="submit" className="w-full">
          Create new account
        </Button>
      </form>
      <div className="flex flex-col gap-4">
        <footer className="flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-1 w-full">
            <div className="w-full h-[1px] bg-[#E6E6E6] " />
            <span className="flex items-center px-2 text-black/75 capitalize ">
              or
            </span>
            <div className="w-full h-[1px] bg-[#E6E6E6] " />
          </div>
          <Button
            onClick={handleGoogle}
            type="outline"
            className="!text-black/75 w-full"
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
          </Button>
        </footer>
        <p className="text-sm text-light-grey text-center">
          Already have an account?{" "}
          <Link className="text-primary/75" to="/account">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
