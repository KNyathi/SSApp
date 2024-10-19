'use client'
<<<<<<< HEAD
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const[open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

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
      activeItem = {activeItem} />
    </div>
  );
};

export default Page;
