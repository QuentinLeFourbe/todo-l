import { Task } from "../types/task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
  onCompleteTask: (task: Task) => void;
};

function TaskList(props: TaskListProps) {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={props.onDeleteTask}
          onEditTask={props.onEditTask}
          onCompleteTask={props.onCompleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
