import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoProps } from '../types/types';

const Todo: React.FC<TodoProps> = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo
}) => {
  // Function to handle toggling completion status
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  return (
    <div className='Todo'>
      <s
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={handleToggleComplete}
      >
        {task.task}
      </s>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
