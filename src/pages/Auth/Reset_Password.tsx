import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { passwordPattern } from "../../utils/validator";
import Auth_Header from "../../components/layout/header/Auth_Header";
import Form from "../../components/layout/form/Form";
import Button from "../../components/layout/button/Button";
import { toast } from "react-toastify";
import axiosInstance from "../../services/axiosInstance";
import Cookies from "js-cookie";

const Reset_Password = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { email } = useParams();
  // ___________________ use form ____________________
  const {
    control,
    setError,
    reset,
    getValues,
    formState: { errors, dirtyFields, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: email,
      password: null,
      confirm_password: null,
    },
    mode: "onChange",
  });
  // ___________________ list ____________________
  const formList = [
    {
      id: 1,
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
    {
      id: 2,
      formType: "password",
      fieldName: "confirm_password",

      validator: {
        required: "required_field",
        validate: (value) => {
          const password = getValues("password");
          return value === password || "Password don't match";
        },
      },
      placeholder: "********",
      label: "Confirm password",
    },
  ];
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.patch(
        `/api/auth/reset-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("forget_token")}`,
          },
        }
      );
      if (response.status === 200) {
        navigate(`/account`);
      }
    } catch (err) {
      if (err.response.data.errors === "Token required") {
        toast.error("Something went wrong try again later");
      } else {
        toast.error(err.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <Auth_Header title="Reset password" des="Change password to new one" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Form
          formList={formList}
          control={control}
          errors={errors}
          loading={loading}
        />
        <Button loading={loading} buttonType="submit" className="w-full">
          Reset password
        </Button>
      </form>
    </div>
  );
};

export default Reset_Password;
