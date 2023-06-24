import { useState } from "react";
import { Task } from "../types/task";
import TaskCreator from "../components/TaskCreator";
import TaskList from "../components/TaskList";

function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task: Task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const editTask = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const completeTask = (task: Task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div>
      <TaskCreator onCreateTask={createTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
}

export default TodoListPage;
