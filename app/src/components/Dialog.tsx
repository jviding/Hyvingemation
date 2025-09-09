import React from 'react';
import { Button } from "@/components/Form"

type DialogProps = {
  title: string;
  text: string;
  type: "confirm" | "delete";
  onSubmit: () => void;
  onCancel: () => void;
};

export default function Dialog ({ title, text, type, onSubmit, onCancel }: DialogProps) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-gray-700 mb-6">
          {text}
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            label={type === "delete" ? "Delete" : "Confirm"}
            color={type === "delete" ? "red" : "blue"}
            onClick={onSubmit}
          />
          <Button 
            label="Cancel"
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
};
