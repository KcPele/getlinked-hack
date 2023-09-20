import React, { FC } from "react";

const Button: FC<{
  text: string;
  onClick: () => void;
  customeClassName?: string;
}> = ({ text, onClick, customeClassName }) => {
  return (
    <button
      onClick={onClick}
      className={`${customeClassName} rounded-sm px-[3.2rem] py-4 bg-p-gradient`}
    >
      {text}
    </button>
  );
};

export default Button;
