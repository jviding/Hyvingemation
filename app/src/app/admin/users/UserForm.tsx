import React from "react";
import { Form, TextField } from "@/components/Form";

type UserFormProps = {
  onSubmitted: () => void;
  onCancelled: () => void;
};

export default function UserForm({onSubmitted, onCancelled}: UserFormProps) {

  const [formData, setFormData] = React.useState({
    name: "",
    password: "",
    role: ""
  });

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    onSubmitted();
  };

  return (
    <Form onSubmit={handleSubmit} onCancel={onCancelled}>
      <TextField 
        name="name" 
        label="Name" 
        value={formData.name}
        required 
        onChange={handleChange}
      />
      <TextField 
        name="password" 
        label="Password" 
        value={formData.password}
        required 
        onChange={handleChange}
      />
      <TextField 
        name="role" 
        label="Role" 
        value={formData.role}
        required 
        onChange={handleChange}
      />
    </Form>
  );     
}
