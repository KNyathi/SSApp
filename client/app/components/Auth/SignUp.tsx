/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),

  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),

  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters long")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .test(
      "not-similar",
      "Password must not be similar to your name",
      function (value) {
        const { name } = this.parent; // Access the name field from the parent object
        if (!name || !value) return true;

        const cleanedName = name.replace(/\s+/g, "").toLowerCase();
        const cleanedPassword = value.toLowerCase();

        for (let i = 0; i <= cleanedName.length - 4; i++) {
          const substring = cleanedName.slice(i, i + 4);
          if (cleanedPassword.includes(substring)) {
            return false; // The password contains a 4+ character sequence from the name
          }
        }

        return true; // No invalid sequence found
      }
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [register, {data, error, isSuccess}] = useRegisterMutation();

  useEffect(() => {
    if(isSuccess){
        const message = data?.message || "Registration successful";
        toast.success(message);
        setRoute("Verification");
    }

    if(error) {
      if("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      console.log(email, password);
      const data = {
        name, email, password
      };

      await register(data);
      
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full ">
      <h1 className={`${styles.title}`}>Create Your Free Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            What&apos;s your name?
          </label>
          <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Bennett JSCoder"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>

        <div className="mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            What&apos;s your email address?
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="jscoder@gmail.com"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>

        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>

          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />

          {/*  for hiding or revealing the password upon entry*/}
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute text-white dark:text-black bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute text-white dark:text-black bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>

        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}

        {/* Confirm Password Field */}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="confirmPassword">
            Confirm your password
          </label>

          <input
            type={!showConfirmPassword ? "password" : "text"}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Confirm password"
            className={`${
              errors.confirmPassword &&
              touched.confirmPassword &&
              "border-red-500"
            } ${styles.input}`}
          />

          {/* For hiding or revealing the confirm password */}
          {!showConfirmPassword ? (
            <AiOutlineEyeInvisible
              className="absolute text-white dark:text-black bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShowConfirmPassword(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute text-white dark:text-black bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShowConfirmPassword(false)}
            />
          )}
        </div>

        {errors.confirmPassword && touched.confirmPassword && (
          <span className="text-red-500 pt-2 block">
            {errors.confirmPassword}
          </span>
        )}

        <div className="w-full mt-5">
          <input
            type="submit"
            value="Create Account"
            className={`${styles.button}`}
          />
        </div>
        <br />

        <h5 className="text-center text-white dark:text-black pt-4 font-Poppins text-[14px]">
          Already have an account? {""}
          <span
            className="text-[#c98500ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Login
          </span>
        </h5>
      </form>

      <br />
    </div>
  );
};

export default SignUp;
