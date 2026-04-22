import type { FilterType } from "../App";

interface TaskFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

function TaskFilter({ filter, setFilter }: TaskFilterProps) {
  return (
    <div className="filters">
      <button
        type="button"
        className={filter === "todas" ? "active" : ""}
        onClick={() => setFilter("todas")}
      >
        Todas
      </button>

      <button
        type="button"
        className={filter === "pendientes" ? "active" : ""}
        onClick={() => setFilter("pendientes")}
      >
        Pendientes
      </button>

      <button
        type="button"
        className={filter === "completadas" ? "active" : ""}
        onClick={() => setFilter("completadas")}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilter;