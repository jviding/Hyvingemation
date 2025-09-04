"use client";

import React from "react";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  color?: "gray" | "blue";
  onClick?: (e: React.FormEvent) => void;
  size?: string;
};

export function Button({ 
  label, 
  type = "button",
  color = "gray", 
  onClick = () => {},
  size = "px-4 py-2"
}: ButtonProps) {

  const getClassName = (color?: string) => {
    switch(color) {
      case "blue":
        return "bg-blue-600 text-white rounded hover:bg-blue-700"; // px-4 py-2
      default:
        return "bg-gray-300 text-black rounded hover:bg-gray-400"; // px-4 py-2
    };
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${getClassName(color)} ${size}`}
    >
      {label}
    </button>
  )
}
