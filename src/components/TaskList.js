import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, handleRemove}) {
  
  const displayTaskList = tasks
    .filter((task) => {
      if (selectedCategory === "All") return true;
      return task.category === selectedCategory;
    })
    .map((task) => {
     return <Task text={task.text} category={task.category} key={task.text} handleRemove={handleRemove}/>
   })

  return (
    <div className="tasks">
        {displayTaskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
