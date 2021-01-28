import { v4 as uuidv4 } from 'uuid';

const Project = (title) => {
  const id = uuidv4();
  return {
    title,
    id,
    todos: [],
  };
};

export default Project;
