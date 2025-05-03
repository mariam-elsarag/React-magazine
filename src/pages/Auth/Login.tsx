import React, { useState } from "react";
import Auth_Header from "../../components/layout/header/Auth_Header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import Form from "../../components/layout/form/Form";
import Button from "../../components/layout/button/Button";
import axiosInstance, { apiUrl } from "../../services/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { GoogleIcon } from "../../assets/icons/Icon";
const Login = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  // ___________________ use form ____________________
  const {
    control,
    setError,
    reset,
    formState: { errors, dirtyFields, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });
  // ___________________ list ____________________
  const formList = [
    {
      id: 0,
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
      id: 1,
      formType: "password",
      fieldName: "password",
      validator: {
        required: "Password is required",
      },
      placeholder: "********",
      label: "password",
      hasForgetPassword: true,
    },
  ];
  // ___________________ login ____________________

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/auth/login", data);
      if (response?.status === 200) {
        setToken(response.data.token);
        Cookies.set("userId", response.data.userId);
        Cookies.set("token", response.data.token);
        Cookies.set("avatar", response.data.avatar);
        Cookies.set("full_name", response.data.full_name);
        setUser({
          full_name: response.data.full_name,
          avatar: response.data.avatar,
          userId: response.data.userId,
        });
        navigate("/");
        toast.success("Successfully loged in");
      }
    } catch (err) {
      if (err?.response?.data?.errors?.length > 1) {
        setError("email", {
          type: "manual",
          message: "Wrong credentials",
        });
        setError("password", {
          type: "manual",
          message: "Wrong credentials",
        });
        toast.error("Wrong credentials");
      } else if (err?.response?.data?.errors?.includes("Invalid email")) {
        setError("email", {
          type: "manual",
          message: "Email is not valid",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Wrong credentials",
        });
        setError("password", {
          type: "manual",
          message: "Wrong credentials",
        });
        toast.error("Wrong credentials");
      }

      // console.log("error", err);
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
        title="Login"
        des="Add your details below to get back into the app"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Form
          formList={formList}
          control={control}
          errors={errors}
          loading={loading}
        />
        <Button loading={loading} buttonType="submit" className="w-full">
          login
        </Button>
      </form>
      <div className="flex flex-col gap-6">
        <footer className="flex flex-col justify-center items-center gap-6">
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
            <span>Continue with Google</span>
          </Button>
        </footer>
        <p className="text-sm text-light-grey text-center">
          Don’t have an account?{" "}
          <Link className="text-primary/75" to="/account/register">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
