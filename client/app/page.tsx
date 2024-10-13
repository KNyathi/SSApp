'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";

interface Props{}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
      title="ScriptStorm"
      description= "At ScriptStorm, it’s JavaScript, all the time. Nothing else."
      keywords="Learn how to Code, JavaScript Courses, learn ReactJS, learn NextJS, learn NodeJS, beginner JavaScript Courses, learn TypeScript"
      />
    </div>
  )
};

export default Page;