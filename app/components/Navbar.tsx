"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./UI";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navLinks = [
    { name: "Timeline", path: "#timeline" },
    { name: "Overview", path: "#overview" },
    { name: "FAQs", path: "#faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="padding-top padding-left padding-right text-p-white flex justify-between items-center ">
      <div>
        <Link href="/">
          <h2 className="semi-mid-font">
            get<span className="text-p-mix">linked</span>
          </h2>
        </Link>
      </div>
      <div className="hidden nav-sc:grid grid-flow-col items-center gap-8 lg:gap-[7.6rem]">
        <div>
          <ul className="grid grid-flow-col gap-[3.4rem]">
            {navLinks.map((link) => (
              <li
                className={`${link.path == pathname && "nav-text-gradient"}`}
                key={link.name}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[10.7rem]">
          <Button
            onClick={() => {
              router.push("/register");
            }}
            text="Register"
          />
        </div>
      </div>

      <div className="block nav-sc:hidden">
        <Image
          src="/assets/svg/open-nav.svg"
          alt="menu"
          height={30}
          width={30}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="bg-s-black    fixed top-0 left-0 w-full h-screen z-10 scale-up-center">
            <div className="relative padding-left padding-right flex w-full h-full">
              <Image
                src="/assets/svg/close-nav.svg"
                alt="close"
                width={20}
                height={20}
                className="cursor-pointer absolute top-[60px] right-[50px]"
                onClick={() => setToggleMenu(false)}
              />
              <div className="gird   h-fit my-auto ">
                <div>
                  <ul className="semi-small-font grid items-center gap-4">
                    {navLinks.map((link) => (
                      <li
                        className={`${
                          link.path == pathname && "nav-text-gradient"
                        }`}
                        key={link.name}
                      >
                        <Link href={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 max-w-[10.7rem]">
                  <Button
                    customeClassName={`${
                      pathname === "/register" && "nav-border-gradient"
                    }`}
                    onClick={() => {
                      router.push("/register");
                    }}
                    text="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
