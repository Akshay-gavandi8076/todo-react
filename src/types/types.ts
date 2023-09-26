// Define the interface for a todo item
export interface TodoWrapperProps {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

// Define the Todo component
export interface TodoProps {
  task: TodoWrapperProps;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

export interface TodoFormProps {
  addTodo: (todo: any) => void;
}

export interface EditTodoFormProps {
  editTodo: (value: string, id: string) => void;
  task: TodoWrapperProps;
}
