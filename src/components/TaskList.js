// components/TaskList.js
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const filteredTasks = tasks.filter(
    (task) => filterStatus === "All" || task.status === filterStatus
  );
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  return (
    <div>
      <div className="task-controls">
        <select
          className="form-control"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          className="btn"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Due Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      {sortedTasks.length > 0 ? (
        sortedTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="no-tasks">No tasks found.</p>
      )}
    </div>
  );
}
export default TaskList;