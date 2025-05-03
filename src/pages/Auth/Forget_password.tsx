import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import { toast } from "react-toastify";
import Auth_Header from "../../components/layout/header/Auth_Header";
import Form from "../../components/layout/form/Form";
import Button from "../../components/layout/button/Button";

const Forget_password = () => {
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
    defaultValues: { email: "" },
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
  ];
  // _________________ forget password _____________________

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/auth/otp", data);
      if (response?.status === 200) {
        navigate(`/account/${data?.email}/otp`);
      }
    } catch (err) {
      toast.error(err.response.data.errors);
      setError("email", {
        type: "manual",
        message: err.response.data.errors,
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <Auth_Header
        title="Forget password"
        des="Enter Email address associated with your account"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Form
          formList={formList}
          control={control}
          errors={errors}
          loading={loading}
        />
        <Button loading={loading} buttonType="submit" className="w-full">
          Send OTP
        </Button>
      </form>
    </div>
  );
};

export default Forget_password;
