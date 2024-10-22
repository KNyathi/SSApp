/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const[open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="ScriptStorm"
        description="At ScriptStorm, it’s JavaScript, all the time. Nothing else."
        keywords="Learn how to Code, JavaScript Courses, learn ReactJS, learn NextJS, learn NodeJS, beginner JavaScript Courses, learn TypeScript"
      />
      <Header
      open= {open}
      setOpen = {setOpen}
      activeItem = {activeItem} 
      setRoute={setRoute}
      route={route}
      />

      <Hero />

    </div>
  );
};

export default Page;
