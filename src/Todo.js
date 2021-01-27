const Todo = (title, description, due, priority) => {
  const toggleCompletion = () => {
    isCompleted = !isCompleted;
  };
  return {
    title,
    description,
    due,
    priority,
    isCompleted: false,
    toggleCompletion,
  };
};

export default Todo;
