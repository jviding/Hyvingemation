"use client";

import React from "react";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  color?: "gray" | "blue" | "red";
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
        return "bg-blue-600 text-white rounded hover:bg-blue-700";
      case "red":
        return "bg-red-600 text-white rounded hover:bg-red-700"; // font-medium
      default:
        return "bg-gray-300 text-black rounded hover:bg-gray-400";
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
