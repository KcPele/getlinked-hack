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

interface FormValues {
  firstName: string;
  email: string;
  message: string;
}
const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};
const Contact = () => {
  let initialValues: FormValues = {
    firstName: "",
    email: "",
    message: "",
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
      <Heading
        title="contact"
        description="contact us"
        keywords="contact,reach,issue,get"
      />
      <Navbar />

      <div className="padding-left padding-right mt-[9rem] grid place-items-center gap-8 grid-flow-col">
        <div className="hidden md:block">
          <h2 className="mid-font text-p-mix block">Rules and</h2>
          <div className="mt-5 text-p-white ">
            <p>Contact </p>
            <p>Information</p>
          </div>
          <div className="mt-5 text-p-white ">
            <p>27,Alara Street </p>
            <p>Yaba 100012</p>
            <p>Lagos State</p>
          </div>
          <div className="mt-5 text-p-white ">
            <p>Call Us: 07067981819</p>
          </div>
          <div className="mt-5 text-p-white ">
            <p>We are open from Monday-Friday </p>
            <p>08:00am - 05:00pm</p>
          </div>
          <div className="text-p-white mt-8 w-fit ">
            <p className="text-p-mix">Share on </p>
            <div className="grid mt-3 grid-cols-4 gap-3">
              <RiInstagramLine className="text-white" size={25} />
              <RiTwitterXFill className="text-white" size={25} />

              <RiFacebookFill className="text-white" size={25} />

              <RiLinkedinFill className="text-white" size={25} />
            </div>
          </div>
        </div>
        <div className="w-full md:shadow md:backdrop-blur-md md:bg-white/[0.03] max-w-[28rem] md:max-w-[38rem]  md:py-16 md:px-20">
          <div className="text-p-mix text-lg">
            <h3>Questions or need assistance?</h3>
            <h3>Let us know about it!</h3>
          </div>
          <form
            onReset={formik.handleReset}
            onSubmit={formik.handleSubmit}
            className="grid  mt-10 "
          >
            <div className="mb-10">
              <InputField
                error={formik.errors.firstName}
                value={formik.values.firstName}
                handleChange={formik.handleChange}
                name="firstName"
                customClassName="placeholder:text-white"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="mb-10">
              <InputField
                value={formik.values.email}
                handleChange={formik.handleChange}
                name="email"
                customClassName="placeholder:text-white"
                error={formik.errors.email}
                placeholder="Mail"
                type="text"
              />
            </div>
            <div className="mb-5">
              <textarea
                value={formik.values.message}
                onChange={formik.handleChange}
                name="message"
                placeholder="Message"
                rows={4}
                className={`placeholder:text-p-white text-p-white px-4 py-2 w-full rounded-sm bg-transparent border-[1px] border-p-white`}
              ></textarea>
              {formik.errors.message && (
                <p className="text-rose-500">{formik.errors.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button
                text="Submit"
                customeClassName="text-p-white"
                type="submit"
              />
            </div>
          </form>
          <div className="md:hidden text-p-white mt-10 w-fit text-center mx-auto ">
            <p className="text-p-mix">Share on </p>
            <div className="grid mt-3 grid-cols-4 gap-3">
              <RiInstagramLine className="text-white" size={25} />
              <RiTwitterXFill className="text-white" size={25} />

              <RiFacebookFill className="text-white" size={25} />

              <RiLinkedinFill className="text-white" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
