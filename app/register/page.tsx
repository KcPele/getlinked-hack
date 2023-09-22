"use client";
import React from "react";
import { Heading } from "../utils";
import { Navbar } from "../components";
import { FormikErrors, useFormik } from "formik";
import { Button, InputField } from "../components/UI";

import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Image from "next/image";
import Success from "../components/UI/Success";

interface FormValues {
  teamName: string;
  phone: string;
  email: string;
  projectTopic: string;
  category: string;
  groupSize: string;
  agreedToTerms: boolean;
}
const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.teamName) {
    errors.teamName = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.projectTopic) {
    errors.projectTopic = "Required";
  }
  if (!values.category) {
    errors.category = "Required";
  }
  if (!values.groupSize) {
    errors.groupSize = "Required";
  }
  if (!values.agreedToTerms) {
    errors.agreedToTerms = "Required";
  }
  return errors;
};
const Register = () => {
  let initialValues: FormValues = {
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
    agreedToTerms: false,
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div>
      <Success />
      <Heading
        title="Register"
        description="  
    get registered "
        keywords="signup,register"
      />
      <Navbar />

      <div className="padding-left padding-right mt-[9rem] flex justify-center items-center gap-8 flex-col md:flex-row">
        <div className="">
          <div>
            <Image
              width={600}
              height={500}
              src="/assets/svg/3d-graphic-designer.svg"
              alt="3d graphic designer"
            />
          </div>
        </div>
        <div className="w-full  md:shadow md:backdrop-blur-md md:bg-white/[0.03] max-w-[46rem] py-10 px-14 xl:py-16 xl:px-20">
          <div className="">
            <h3 className="hidden md:block mb-10 text-p-mix text-[2rem]">
              Register
            </h3>
            <div className="">
              <p className="text-p-white mb-6">Be part of this movement!</p>
              <h3 className="text-p-white text-xl md:text-2xl">
                CREATE YOUR ACCOUNT
              </h3>
            </div>
          </div>
          <form
            onReset={formik.handleReset}
            onSubmit={formik.handleSubmit}
            className="grid  mt-10  "
          >
            <div className="grid lg:grid-flow-col  lg:gap-8">
              <div className="mb-10">
                <InputField
                  label="Teams Name"
                  error={formik.errors.teamName}
                  value={formik.values.teamName}
                  handleChange={formik.handleChange}
                  name="teamName"
                  placeholder="Enter the nam of your group"
                  type="text"
                />
              </div>
              <div className="mb-10">
                <InputField
                  label="Phone"
                  error={formik.errors.phone}
                  value={formik.values.phone}
                  handleChange={formik.handleChange}
                  name="phone"
                  placeholder="Enter your phone number"
                  type="text"
                />
              </div>
            </div>
            <div className="grid lg:grid-flow-col  lg:gap-8">
              <div className="mb-10">
                <InputField
                  label="Email"
                  value={formik.values.email}
                  handleChange={formik.handleChange}
                  name="email"
                  error={formik.errors.email}
                  placeholder="Mail"
                  type="text"
                />
              </div>
              <div className="mb-10">
                <InputField
                  label="Project Topic"
                  error={formik.errors.projectTopic}
                  value={formik.values.projectTopic}
                  handleChange={formik.handleChange}
                  name="projectTopic"
                  placeholder="what is your project topic"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-5">
              <p className="text-p-pink text-center md:text-left">
                Please review your registration details before submitting
              </p>
              <div className="flex gap-2 mt-4">
                <input
                  type="checkbox"
                  onChange={formik.handleChange}
                  name="agreedToTerms"
                  className="bg-transparent border-[1px] border-p-white w-5 h-5"
                />
                <label htmlFor="agreedToTerms " className="text-p-white">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
            </div>
            <div className="text-center w-full px-4 md:px-0">
              <Button
                text="Register"
                customeClassName="text-p-white w-full"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
