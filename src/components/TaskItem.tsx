import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>

      <div className="task-actions">
        <button type="button" onClick={() => onToggle(task.id)}>
          {task.completed ? "Desmarcar" : "Completar"}
        </button>
        <button type="button" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;