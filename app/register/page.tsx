"use client";
import React from "react";
import { Heading } from "../utils";
import { Navbar } from "../components";
import { FormikErrors, useFormik } from "formik";
import { Button, InputField } from "../components/UI";

import Image from "next/image";
import Success from "../components/UI/Success";
import { motion } from "framer-motion";
interface FormValues {
  team_name: string;
  phone_number: string;
  email: string;
  project_topic: string;
  category: number;
  group_size: number;
  privacy_poclicy_accepted: boolean;
}
const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.team_name) {
    errors.team_name = "Field cannot be empty";
  }
  if (!values.phone_number) {
    errors.phone_number = "Field cannot be empty";
  }
  if (!values.email) {
    errors.email = "Field cannot be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.project_topic) {
    errors.project_topic = "Field cannot be empty";
  }
  if (!values.category) {
    errors.category = "Field cannot be empty";
  }
  if (!values.group_size) {
    errors.group_size = "Field cannot be empty";
  }
  if (!values.privacy_poclicy_accepted) {
    errors.privacy_poclicy_accepted = "Field cannot be empty";
  }
  return errors;
};
const containerVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      deplay: 0.5,
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
let groups = [
  { id: 1, name: "1-3" },
  { id: 2, name: "4-6" },
  { id: 3, name: "7-10" },
  { id: 4, name: "11-15" },
];
const Register = () => {
  let baseUrl = "https://backend.getlinked.ai";
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [categories, setCategories] = React.useState<
    Array<{ id: number; name: string }>
  >([]);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  React.useEffect(() => {
    fetch(`${baseUrl}/hackathon/categories-list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  let initialValues: FormValues = {
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: 0,
    group_size: 0,
    privacy_poclicy_accepted: false,
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      setIsLoading(true);
      fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
      formik.resetForm();
    },
  });
  return (
    <div className="relative  h-full overflow-x-clip pb-14">
      {isSuccess && (
        <Success
          onClick={() => {
            setIsSuccess(false);
          }}
        />
      )}
      <Heading
        title="Register"
        description="  
    get registered "
        keywords="signup,register"
      />
      <Navbar />
      <div className=" absolute mix-blend-hard-light -z-30 max-w-[64rem] w-full ">
        <Image
          alt=""
          src="/assets/image/contact-left-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 "
        />
      </div>
      <motion.div
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="sm:px-10 lg:px-20 mt-[9rem] flex justify-center items-center gap-8 flex-col md:flex-row"
      >
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
        <div className="relative w-full  md:shadow md:backdrop-blur-md md:bg-white/[0.03] max-w-[46rem] py-10 px-14 xl:py-16 xl:px-20">
          <div className="-top-20 hidden md:block right-3 absolute  mix-blend-hard-light  max-w-[1.5rem] w-full">
            <Image
              alt=""
              src="/assets/svg/gray-star.svg"
              layout="responsive"
              width={100}
              height={100}
              className=" w-full mix-blend-hard-light"
            />
          </div>
          <div className="">
            <h3 className="hidden md:block mb-10 text-p-mix text-[2rem]">
              Register
            </h3>
            <div className="">
              <div className="flex mb-6  items-end">
                <p className="text-p-white mt-4 ">Be part of this movement!</p>
                <div className=" mix-blend-hard-light  max-w-[6rem] w-full">
                  <Image
                    alt=""
                    src="/assets/svg/walking-group.svg"
                    layout="responsive"
                    width={100}
                    height={100}
                    className=" w-full mix-blend-hard-light"
                  />
                </div>
              </div>
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
                  error={formik.errors.team_name}
                  value={formik.values.team_name}
                  handleChange={formik.handleChange}
                  name="team_name"
                  placeholder="Enter the nam of your group"
                  type="text"
                />
              </div>
              <div className="mb-10">
                <InputField
                  label="Phone"
                  error={formik.errors.phone_number}
                  value={formik.values.phone_number}
                  handleChange={formik.handleChange}
                  name="phone_number"
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
                  error={formik.errors.project_topic}
                  value={formik.values.project_topic}
                  handleChange={formik.handleChange}
                  name="project_topic"
                  placeholder="what is your project topic"
                  type="text"
                />
              </div>
            </div>
            <div className="grid  grid-cols-2 gap-4  lg:gap-8 mb-5">
              <div className="grid gap-3">
                <label htmlFor="category" className="text-p-white">
                  Category
                </label>
                <select
                  name="category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  id="category"
                  className={` w-full border-[1px] ${
                    formik.errors.category
                      ? "border-rose-500"
                      : "border-p-white"
                  }  bg-transparent   px-6 rounded-md  py-3 text-p-white`}
                >
                  <option className=" text-p-white p-4" value="">
                    Select yout category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-3">
                <label htmlFor="group_size" className="text-p-white">
                  Group Size
                </label>
                <select
                  onChange={formik.handleChange}
                  name="group_size"
                  value={formik.values.group_size}
                  className={` w-full border-[1px] ${
                    formik.errors.group_size
                      ? "border-rose-500"
                      : "border-p-white"
                  }  bg-transparent  px-6 rounded-md  py-3 text-p-white`}
                >
                  <option className="bg-transparent text-p-white p-4" value="">
                    Select
                  </option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
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
                  name="privacy_poclicy_accepted"
                  className="bg-transparent border-[1px] border-p-white w-5 h-5"
                />
                <label
                  htmlFor="privacy_poclicy_accepted "
                  className="text-p-white"
                >
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
            </div>
            <div className="text-center w-full px-4 md:px-0">
              <Button
                text={isLoading ? "Registaring..." : "Register"}
                customeClassName="text-p-white w-full"
                type="submit"
              />
            </div>
          </form>
          <div className=" right-24 -bottom-4 hidden md:block absolute  mix-blend-hard-light  max-w-[0.75rem] w-full">
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
      </motion.div>
      <div className=" hidden md:block absolute bottom-0 right-0 mix-blend-hard-light -z-30 max-w-[64rem] right-0-0 w-full">
        <Image
          alt=""
          src="/assets/image/contact-right-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 w-full mix-blend-hard-light"
        />
      </div>
    </div>
  );
};

export default Register;
