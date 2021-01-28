import { v4 as uuidv4 } from 'uuid';

const Todo = (title, description, due, priority) => {
  const toggleCompletion = () => {
    console.log('BEFORE ', isCompleted);
    isCompleted = !isCompleted;
    console.log('AFTER ', isCompleted);
  };

  const id = uuidv4();

  return {
    title,
    id,
    description,
    due,
    priority,
    isCompleted: false,
    toggleCompletion,
  };
};

export default Todo;
