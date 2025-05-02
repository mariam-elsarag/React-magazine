import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Button from "../button/Button";
import {
  ArrowIcon,
  BurgerIcon,
  CloseIcon,
  LogoutIcon,
  SaveIcon,
  UserIcon,
} from "../../../assets/icons/Icon";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../../assets/images/Images";
import Cookies from "js-cookie";

const navList = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
];
const Navbar = () => {
  const { token, user } = useAuth();
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <nav className="nav_container navbar flex items-center gap-2 justify-between  w-full max-w-[1536px] mx-auto   py-4">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[100px]" />
        </Link>
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {navList?.map((item) => (
            <li key={item.title}>
              <NavLink
                className=" text-black text-base transition-all ease-in-out duration-300  "
                to={item.path}
              >
                {item?.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`flex items-center gap-1 ${token ? "gap-5" : "md:gap-0"} `}
        >
          <div className="flex items-center gap-1">
            <span
              className="cursor-pointer flex items-center justify-center  md:hidden w-10 h-10 rounded-xl bg-grey"
              role="button"
              onClick={() => setToggleNav(true)}
            >
              <BurgerIcon />
            </span>
          </div>
          {token ? (
            <div className="flex items-center gap-5">
              <Profile_Dropdown />
              <Link
                to="/profile/saved"
                className="flex items-center justify-center w-10 h-10 bg-grey rounded-xl"
              >
                <SaveIcon />
              </Link>
            </div>
          ) : (
            <div className="md:flex items-center hidden ">
              <Link
                to="/account"
                className="flex items-center justify-center w-10 h-10 bg-grey rounded-xl"
              >
                <UserIcon width="16" height="16" />
              </Link>
              <div className="text-dark-color ">
                <Link
                  to="/account"
                  className="h5 border-r-[2px] border-dark-color px-2"
                >
                  login
                </Link>
                <Link to="/account/register" className="h5 px-2">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <MobileNavbar setToggleNav={setToggleNav} toggleNav={toggleNav} />
    </>
  );
};
const Profile_Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  const { setToken, setUser, user } = useAuth();
  const logout = () => {
    setToken(null);
    setUser({ full_name: null, avatar: null });
    Cookies.remove("avatar");
    Cookies.remove("token");
    Cookies.remove("full_name");
  };
  return (
    <div className="relative hidden md:flex">
      <header
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setToggle((pre) => !pre)}
      >
        <img
          src={user.avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover object-center border border-grey"
        />
        <span className="font-[500] h5">{user.full_name}</span>
        <span className={toggle ? "rotate-270" : "rotate-90"}>
          <ArrowIcon fill="#3E323280" />
        </span>
      </header>
      <ul
        className={` min-w-[162px] absolute z-10 top-[40px] ${
          toggle ? "flex" : "hidden"
        } bg-white main_shadow rounded-xl py-2 px-4 flex flex-col gap-3 `}
      >
        <li>
          <Link to="/profile" className="flex items-center gap-1 text-black/75">
            <UserIcon width="15" height="15" fill="#3E3232BF" />
            <span>{user.full_name}</span>
          </Link>
        </li>
        <li
          onClick={() => logout()}
          className=" cursor-pointer flex items-center gap-1 text-black/75"
        >
          <LogoutIcon width="18" height="18" fill="#3E3232BF" />
          <span>logout</span>
        </li>
      </ul>
    </div>
  );
};
const MobileNavbar = ({ toggleNav, setToggleNav }) => {
  const { token, user } = useAuth();

  return (
    <div
      className={`${
        toggleNav ? "show" : "close"
      } mobile_navbar flex flex-col md:hidden fixed overflow-y-hidden bg-dark-color/40 z-50 top-0  bottom-0 right-0 left-0`}
    >
      <aside
        className={`bg-white pt-7 pb-10 px-4 w-[300px]  overflow-y-auto fixed top-0 bottom-0  right-0 flex flex-col gap-10`}
      >
        <header className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => {
              setToggleNav(false);
            }}
          >
            <img src={Logo} alt="logo" className="w-[80px] object-cover" />
          </Link>
          <span
            role="button"
            onClick={() => setToggleNav(false)}
            className="cursor-pointer"
          >
            <CloseIcon />
          </span>
        </header>
        <div className="flex-1 flex flex-col justify-between">
          <nav className="nav_mobile flex flex-col gap-7 ">
            {navList?.map((item) => (
              <NavLink
                key={item?.path}
                to={item?.path}
                onClick={() => {
                  setToggleNav(false);
                }}
                className="text-secondary-dark text-sm capitalize transition-all ease-in-out duration-300 relative "
              >
                {item?.title}
              </NavLink>
            ))}
          </nav>
          <footer className="flex flex-col gap-2">
            {token ? (
              <footer className="flex flex-col gap-3">
                <Link
                  to="/profile"
                  className="flex items-center text-black/75 gap-2 cursor-pointer "
                >
                  <img src={user?.avatar} alt="avatar" className="w-5 h-5" />
                  <span className="text-secondary-dark ">
                    {user?.full_name}
                  </span>
                </Link>

                <div className="flex items-center text-black/75 gap-2 cursor-pointer ">
                  <span>
                    <LogoutIcon fill="#3E3232BF" />
                  </span>
                  <span className="text-secondary-dark ">logout</span>
                </div>
              </footer>
            ) : (
              <Link className="flex items-center  gap-2" to="/account/login">
                <span className="rotate-180">
                  <LogoutIcon />
                </span>
                <span className="text-secondary-dark ">login</span>
              </Link>
            )}
          </footer>
        </div>
      </aside>
    </div>
  );
};
export default Navbar;
