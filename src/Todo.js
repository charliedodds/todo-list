import { v4 as uuidv4 } from 'uuid';

const Todo = (title, description, due, priority) => {
  const id = uuidv4();

  return {
    title,
    id,
    description,
    due,
    priority,
  };
};

export default Todo;
