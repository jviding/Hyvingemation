import React from "react";
import { Form, TextField } from "@/components/Form";

type TaskFormProps = {
  onSubmitted: () => void;
  onCancelled: () => void;
};

export default function TaskForm({onSubmitted, onCancelled}: TaskFormProps) {

  const [formData, setFormData] = React.useState({
      task: "",
      assignee: "",
      time: ""
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
        name="task" 
        label="Task" 
        value={formData.task}
        required 
        onChange={handleChange}
      />
      <TextField 
        name="assignee" 
        label="Assignee" 
        value={formData.assignee}
        required 
        onChange={handleChange}
      />
      <TextField 
        name="time" 
        label="Time" 
        value={formData.time}
        required 
        onChange={handleChange}
      />
    </Form>
  );
}