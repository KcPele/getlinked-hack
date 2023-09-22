import { type } from "os";
import React, { FC } from "react";

const Button: FC<{
  text: string;
  onClick?: () => void;
  customeClassName?: string;
  type?: "button" | "submit" | "reset";
}> = ({ text, onClick, customeClassName, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${customeClassName} rounded-sm px-[3.2rem] py-4 bg-p-gradient`}
    >
      {text}
    </button>
  );
};

export default Button;
