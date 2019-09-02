import React, { useState } from "react";

const Task = props => {
  const [taskCompleted, setTaskCompleted] = useState(props.in.complete);
  return (
    <li className={taskCompleted ? "task taskCompleted" : "task"}>
      <span className="title">{props.in.title}</span>
      <input
        type="button"
        onClick={() => setTaskCompleted(!taskCompleted)}
        value={taskCompleted ? "⛔ Re-open" : "⏰ Complete"}
      />
    </li>
  );
};

export default Task;
