import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { TodoWrapperProps } from '../types/types';
import { generateUniqueId } from '../utils/uuid'; // Import the unique ID generator

export const TodoWrapper: React.FC = () => {
  // Initialize state for storing todos
  const [todos, setTodos] = useState<TodoWrapperProps[]>([]);

  useEffect(() => {
    // Load todos from localStorage when the component mounts
    const savedTodosJSON = localStorage.getItem('todos');
    const savedTodos: TodoWrapperProps[] = savedTodosJSON
      ? JSON.parse(savedTodosJSON)
      : [];
    setTodos(savedTodos);
  }, []);

  // Function to add a new todo
  const addTodo = (todo: string) => {
    const newTodos: TodoWrapperProps[] = [
      ...todos,
      { id: generateUniqueId(), task: todo, completed: false, isEditing: false }
    ];
    setTodos(newTodos);

    // Save updated todos to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id: string) => {
    const newTodos: TodoWrapperProps[] = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);

    // Save updated todos to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Function to delete a todo
  const deleteTodo = (id: string) => {
    const newTodos: TodoWrapperProps[] = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);

    // Save updated todos to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Function to toggle the edit mode of a todo
  const editTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to edit the task of a todo
  const editTask = (task: string, id: string) => {
    const newTodos: TodoWrapperProps[] = todos.map(todo =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);

    // Save updated todos to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
