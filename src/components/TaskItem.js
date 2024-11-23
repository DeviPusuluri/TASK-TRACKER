// components/EditTaskModal.js
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskItem({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });
  const handleSave = () => {
    updateTask(updatedTask);
    setIsEditing(false);
  };
  return (
    <div className="task-card">
      {isEditing ? (
        <>
          <div className="task-info">
            <input
              className="form-control mb-2"
              type="text"
              value={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
            />
            <textarea
              className="form-control mb-2"
              value={updatedTask.description}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
            />
          </div>
          <div className="task-actions">
            <button onClick={handleSave}>Save</button>
          </div>
        </>
      ) : (
        <>
          <div className="task-info">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>
              <strong>Due:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
export default TaskItem;