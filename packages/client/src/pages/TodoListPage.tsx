import { useState } from "react";
import { Task } from "../types/task";
import TaskCreator from "../components/TaskCreator";
import TaskList from "../components/TaskList";

function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

  const createTask = (taskToCreate: Task) => {
    setTasks([...tasks, taskToCreate]);
  };

  const deleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((taskInArray) => taskInArray.id !== taskToDelete.id));
  };

  const editTask = (editedTask: Task) => {
    // name: Burpees, id: 1
    setTasks(
      tasks.map((taskInArray) =>
        taskInArray.id === editedTask.id ? editedTask : taskInArray
      )
    );
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
      {notCompletedTasks.length > 0 && (
        <>
          <p>On going tasks</p>
          <TaskList
            tasks={notCompletedTasks}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onCompleteTask={completeTask}
          />
        </>
      )}
      {completedTasks.length > 0 && (
        <>
          <p>Completed task</p>
          <TaskList
            tasks={completedTasks}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onCompleteTask={completeTask}
          />
        </>
      )}
    </div>
  );
}

export default TodoListPage;
