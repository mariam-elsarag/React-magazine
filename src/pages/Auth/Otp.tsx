import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/layout/button/Button";
import Form from "../../components/layout/form/Form";
import Auth_Header from "../../components/layout/header/Auth_Header";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance from "../../services/axiosInstance";
import Cookies from "js-cookie";

const Otp = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialTime = parseInt(Cookies.get("otp_timer") || 120, 10);
  const [remainingTime, setRemainingTime] = useState(initialTime);

  // ___________________ use form ____________________
  const {
    control,
    setError,
    reset,
    formState: { errors, dirtyFields, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: { email: email, otp: null },
    mode: "onChange",
  });
  // ___________________ list ____________________
  const formList = [
    {
      id: 0,
      formType: "otp",
      fieldName: "otp",

      validator: {
        required: "Otp is required",
      },
    },
  ];
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/auth/verify", data);
      if (response.status === 200) {
        navigate(`/account/${email}/reset-password`);
        Cookies.set("forget_token", response.data.token);
      }
    } catch (err) {
      toast.error(err.response.data.errors);
      setError("otp", {
        type: "manual",
        message: err.response.data.errors,
      });
    } finally {
      setLoading(false);
    }
  };

  //resend otp
  const reSendOTP = async () => {
    setRemainingTime(120);
    Cookies.set("otp_timer", 120, { expires: 1 / 1440 });
    try {
      const response = await axiosInstance.post(`/api/auth/otp`, {
        email: email,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1;
          Cookies.set("otp_timer", newTime, { expires: 1 / 1440 });
          return newTime;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [remainingTime]);

  const renderTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <p role="button" className="flex items-center gap-1">
        <span className="text-primary/75">Resend in</span>

        <span className="text-primary/75">
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </span>
      </p>
    );
  };
  return (
    <div className="flex flex-col gap-8">
      <Auth_Header
        title="Reset Password"
        des={` We have sent a secret code to ${email}`}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Form
          formList={formList}
          control={control}
          errors={errors}
          loading={loading}
        />
        <Button loading={loading} buttonType="submit" className="w-full">
          Verify otp
        </Button>{" "}
        <p className="text-dark-grey font-[300] text-sm flex items-center gap-1 ">
          <span>Didn’t receive a code</span>
          {remainingTime === 0 ? (
            <span
              onClick={reSendOTP}
              className="text-primary/75 cursor-pointer "
            >
              resend
            </span>
          ) : (
            renderTime()
          )}
        </p>
      </form>
    </div>
  );
};

export default Otp;
