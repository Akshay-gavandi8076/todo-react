import React, { useState } from 'react';
import { EditTodoFormProps } from '../types/types';

const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  // Function to handle form submission for editing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id); // Call the editTodo function with the updated task and task id
  };

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        className='todo-input'
        placeholder='Update task'
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
