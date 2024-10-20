/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";
import { useTheme } from "next-themes";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const Hero: FC<Props> = (props) => {
  const { theme } = useTheme(); //Get the current theme

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {theme === "dark" ? (
          <Image
            src={require("../../../public/assets/learn how to code.png")}
            alt="Background"
            layout="fill" // Use this to fill the container
            objectFit="fill" // Ensures the image covers the area properly
            className="opacity-10" // Make it slightly transparent to make text readable
          />
        ) : (
          <Image
            src={require("../../../public/assets/learn react js.png")}
            alt="Background"
            layout="fill" // Use this to fill the container
            objectFit="scale-down" // Ensures the image covers the area properly
            className="opacity-20" // Make it slightly transparent to make text readable
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-6 1000px:w-[60%]">
        <h2 className="dark:text-white text-black text-[30px] 1000px:text-[50px] font-[600] font-Josefin py-4 leading-[1.2]">
          JavaScript Mastery: Code, Create, and Conquer!
        </h2>

         {/* Divider */}
         <div className="w-[25%] h-[2px] bg-[#c98500ff] my-4"></div>

        <p className="dark:text-[#c98500ff] text-black font-Josefin font-[500] text-[20px] 1000px:text-[24px] w-full max-w-[700px] mt-4 mb-8">
          Ready to become a JavaScript expert?
        </p>

        <p className="dark:text-white text-black font-Josefin font-[100] text-[17px] 1000px:text-[22px] w-full 1000px:max-w-[700px] max-w-[350px] mt-0 mb-8">
          Our comprehensive, hands-on courses are crafted to equip you with the
          skills you need to build dynamic, interactive web applications from
          scratch. And we mean it.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-[500px]">
          <input
            type="search"
            placeholder="Search Courses"
            className="bg-black dark:bg-[#ffffffdd] placeholder:text-white dark:placeholder:text-black border border-gray-300 dark:border-none rounded-l-[5px] rounded-r-[5px] p-3 w-full outline-none text-white dark:text-[#000000ac] text-[18px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] h-[52px] right-0 top-0 bg-[#c98500ff] rounded-r-[5px] cursor-pointer">
            <BiSearch className="text-white" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
