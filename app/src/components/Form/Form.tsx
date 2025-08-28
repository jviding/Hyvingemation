"use client";

import React from "react";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
};

export function Form({ children, onSubmit, onCancel }: FormProps) {
  return (
    <div className="max-w-xl mx-auto">
      <form 
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
        className="mt-8 p-6 rounded border border-gray-300 bg-gray-50 shadow-md space-y-4">  
        
        {children}
        
        <div className="flex gap-4 justify-end">

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        
        </div>
      </form>
    </div>
  )
}
