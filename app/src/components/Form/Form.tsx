"use client";

import React from "react";
import { Button } from "./Button";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
};

export function Form({ 
  children, 
  onSubmit, 
  onCancel 
}: FormProps) {
  return (
    <div className="max-w-xl mx-auto">
      <form 
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
        className="mt-8 p-6 rounded border border-gray-300 bg-gray-50 shadow-md space-y-4">

        {children}
        
        <div className="flex gap-4 justify-end">
          <Button 
            label="Save"
            type="submit" 
            color="blue"
          />
          <Button 
            label="Cancel"
            type="button"
            color="gray"
            onClick={onCancel}
          />        
        </div>
      </form>
    </div>
  )
}
