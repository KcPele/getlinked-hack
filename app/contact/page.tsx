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
  first_name: string;
  email: string;
  message: string;
}
const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.first_name) {
    errors.first_name = "Required";
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
let baseUrl = "https://backend.getlinked.ai";
const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  let initialValues: FormValues = {
    first_name: "",
    email: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      setIsLoading(true);

      formik.resetForm();
      fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className="relative">
      <Heading
        title="contact"
        description="contact us"
        keywords="contact,reach,issue,get"
      />
      <Navbar />
      <div className=" absolute mix-blend-hard-light -z-30 max-w-[64rem] -top-10 md:-top-[150px] w-full">
        <Image
          alt=""
          src="/assets/image/contact-left-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 "
        />
      </div>

      <div className="padding-left padding-right mt-[9rem] grid place-items-center gap-8 grid-flow-col">
        <div className=" relative hidden md:block">
          <div className="-top-32 left-3 absolute  mix-blend-hard-light  max-w-[1.5rem] w-full">
            <Image
              alt=""
              src="/assets/svg/mix-star.svg"
              layout="responsive"
              width={100}
              height={100}
              className=" w-full mix-blend-hard-light"
            />
          </div>
          <h2 className="mid-font text-p-mix block">Get in touch</h2>
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
        <div className="relative w-full rounded-xl md:shadow-xl md:backdrop-blur-md md:bg-white/[0.03] max-w-[28rem] md:max-w-[38rem]  md:py-16 md:px-20">
          <div className="-top-20 right-3 absolute  mix-blend-hard-light  max-w-[1.5rem] w-full">
            <Image
              alt=""
              src="/assets/svg/gray-star.svg"
              layout="responsive"
              width={100}
              height={100}
              className=" w-full mix-blend-hard-light"
            />
          </div>
          <div className="text-p-mix text-xl font-semibold">
            <h3>Questions or need assistance?</h3>
            <h3>Let us know about it!</h3>
          </div>
          <div className="max-w-[15rem] text-p-white text-xm mt-5 md:hidden">
            <p>Email us below to any question related to our event</p>
          </div>
          <form
            onReset={formik.handleReset}
            onSubmit={formik.handleSubmit}
            className="grid  mt-10 "
          >
            <div className=" -left-4 bottom-28 hidden md:block absolute  mix-blend-hard-light  max-w-[2rem] w-full">
              <Image
                alt=""
                src="/assets/svg/purple-star.svg"
                layout="responsive"
                width={100}
                height={100}
                className=" w-full mix-blend-hard-light"
              />
            </div>
            <div className="mb-10">
              <InputField
                error={formik.errors.first_name}
                value={formik.values.first_name}
                handleChange={formik.handleChange}
                name="first_name"
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
                className={`placeholder:text-p-white text-p-white px-4 py-2 w-full rounded bg-transparent border-[1px] ${
                  formik.errors.message ? "border-rose-500" : "border-p-white"
                }`}
              ></textarea>
              {formik.errors.message && (
                <p className="text-rose-500">{formik.errors.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button
                text={isLoading ? "loading..." : "Submit"}
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
      <div className=" hidden md:block absolute top-10 right-0 mix-blend-hard-light -z-30 max-w-[64rem] right-0-0 w-full">
        <Image
          alt=""
          src="/assets/image/contact-right-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 w-full mix-blend-hard-light"
        />
      </div>
      <div className=" right-10 bottom-40 hidden md:block absolute  mix-blend-hard-light  max-w-[2rem] w-full">
        <Image
          alt=""
          src="/assets/svg/white-star.svg"
          layout="responsive"
          width={100}
          height={100}
          className=" w-full mix-blend-hard-light"
        />
      </div>
    </div>
  );
};

export default Contact;
