import React from "react";
import { Logo } from "../../assets/images/Images";
import { Outlet } from "react-router-dom";

const Auth_Container = () => {
  return (
    <section className="bg-white sm:bg-grey min-h-screen flex flex-col items-center justify-center gap-6 py-10 ">
      <div className="flex flex-col gap-6 items-center">
        <img src={Logo} alt="logo" className="w-[100px]" />
        <div className="bg-white w-[95%] xs:w-[476px] rounded-xl py-8 px-4 sm:p-10 ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Auth_Container;
