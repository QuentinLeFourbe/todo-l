import { useState } from "react";
import { Task } from "../types/task";
import styled from "styled-components";

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
    <Container>
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
        <TaskName isCompleted={task.isCompleted} className="task-name">
          {task.name}
        </TaskName>
      )}
      <div className="button-group">
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
    </Container>
  );
}

const Container = styled.div`
  padding: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  width: 400px;

  .button-group {
    margin-left: auto;
    display: flex;
    gap: 8px;
  }
`;

const TaskName = styled.span<{ isCompleted: boolean }>`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export default TaskItem;
