/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from "next/image";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute:(route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const {theme} = useTheme(); //Get the current theme

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  //for a sticky header

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  console.log("Current route:", route);
  console.log("Is modal open?", open);

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full fixed top-0 left-0 border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m0auto py-2 h-full">
          <div className="w-full h-[60px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={
                  "text-[25px] font-Poppins font-[500] text-black dark:text-white"
                }
              >
                {/* Conditionally render the logo based on the theme */}
      
                {theme === "dark" ? (
                  <Image
                    src={require("../../public/scriptstormlogo4.png")} // Dark mode logo
                    alt="ScriptStorm Logo"
                    width={250}
                    height={100}
                    className="ml-4 h-auto"
                  />
                ) : (
                  <Image
                    src={require("../../public/scriptstormlogo1.png")} // Light mode logo
                    alt="ScriptStorm Logo"
                    width={250}
                    height={100}
                    className="ml-4 h-auto"
                  />
                )}
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* only for mobile - responsive website*/}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              
              </div>
               {/* Making it responsive by blocking the menu option for 800px, and instead use the mobile one*/} 
              <HiOutlineUserCircle
                size={25}
                className="hidden 800px:block cursor-pointer dark:text-white text-black"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>

        {/* mobile sidebar*/}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                onClick={() => setOpenSidebar(true)}
              />

              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
               Copyright © 2024 ScriptStorm - A subsidiary of &quot;The Outstanding Company Russia&quot; LLC 
              </p>
            </div>
          </div>
        )}
      </div>
      {
        route === "Login" && (
          <>
            {
              open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  activeItem={activeItem}
                  component= {Login}
                />
              )
            }
          </>
        )
      }

      {
        route === "Sign-Up" && (
          <>
            {
              open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  activeItem={activeItem}
                  component= {SignUp}
                />
              )
            }
          </>
        )
      }
    </div>
  );
};

export default Header;
