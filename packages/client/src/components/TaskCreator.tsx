import { useState } from "react";
import { Task } from "../types/task";
import useNewId from "../hooks/useNewId";

type TaskCreatorProps = {
  onCreateTask: (task: Task) => void;
};

function TaskCreator(props: TaskCreatorProps) {
  const firstId = 0;
  const getNewId = useNewId(firstId);
  const [task, setTask] = useState({
    id: firstId,
    name: "",
    isCompleted: false,
  });

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, name: e.target.value });
  };

  const onSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onCreateTask({ ...task, id: getNewId() });
  };

  return (
    <form onSubmit={onSubmitTask}>
      <input type="text" onChange={handleTaskChange} />
      <button type="submit">Create</button>
    </form>
  );
}

export default TaskCreator;
