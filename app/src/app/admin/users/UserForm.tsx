import { useState, FormEvent } from "react";
import { Form, TextField, SelectField } from "@/components/Form";

type UserFormProps = {
  onSubmitted: () => void;
  onCancelled: () => void;
};

export default function UserForm({onSubmitted, onCancelled}: UserFormProps) {

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    isAdmin: false
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    /*fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(res => {
      if (!res.ok) throw new Error(`Error creating user: ${res.status} ${res.statusText}`);
      onSubmitted();
    }).catch(err => {
      console.error('Error:', err);
    });*/
    onSubmitted();

    console.log(formData);
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
      <SelectField 
        name="role"
        label="Role"
        options={[{ label: "User", value: "user" }, { label: "Admin", value: "admin" }]}
        required 
        onChange={(_, value) => handleChange("isAdmin", value === "admin")}
      />
    </Form>
  );     
}
