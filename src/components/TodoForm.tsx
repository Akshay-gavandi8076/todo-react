import React, { useState, FormEvent } from 'react';
import { TodoFormProps } from '../types/types';

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // Initialize state for input value
  const [value, setValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='What is the task for today?'
        onChange={e => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
