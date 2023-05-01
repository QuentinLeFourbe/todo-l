import { Task } from "../types/task";

type TaskProps = {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
  onCompleteTask: (task: Task) => void;
};

function TaskItem(props: TaskProps) {
  const { task, onDeleteTask, onEditTask, onCompleteTask } = props;
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => onCompleteTask(task)}
        checked={task.isCompleted}
      />
      <span>{task.name}</span>
      <button onClick={() => onDeleteTask(task)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskItem;
