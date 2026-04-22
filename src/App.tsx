import { useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import type { Task } from "./types/task";
import "./index.css";

export type FilterType = "todas" | "pendientes" | "completadas";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("todas");

  const addTask = (text: string): void => {
    const cleanText = text.trim();
    if (!cleanText) return;

    const newTask: Task = {
      id: Date.now(),
      text: cleanText,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: number): void => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "pendientes":
        return tasks.filter((task) => !task.completed);
      case "completadas":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className="container">
      <h1>Administrador de tareas </h1>
      <TaskForm onAddTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;