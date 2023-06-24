import { useState } from "react";
import { Task } from "../types/task";

type TaskProps = {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
  onCompleteTask: (task: Task) => void;
};

function TaskItem(props: TaskProps) {
  const { task, onDeleteTask, onEditTask, onCompleteTask } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => onCompleteTask(task)}
        checked={task.isCompleted}
      />
      {isEditing ? (
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      ) : (
        <span>{task.name}</span>
      )}

      <button onClick={() => onDeleteTask(task)}>Delete</button>
      {isEditing ? (
        <button
          onClick={() => {
            onEditTask({ ...task, name: taskName });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
}

export default TaskItem;
