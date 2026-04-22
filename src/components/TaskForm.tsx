import { useState } from "react";
import type { FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask(text);
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
