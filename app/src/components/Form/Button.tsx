"use client";

import React from "react";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  color?: "gray" | "blue";
  onClick?: (e: React.FormEvent) => void;
};

export function Button({ 
  label, 
  type = "button",
  color = "gray", 
  onClick = () => {} 
}: ButtonProps) {

  const getClassName = (color?: string) => {
    switch(color) {
      case "blue":
        return "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700";
      default:
        return "bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400";
    };
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={getClassName(color)}
    >
      {label}
    </button>
  )
}
