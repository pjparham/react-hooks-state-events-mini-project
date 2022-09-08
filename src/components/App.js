import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [list, setList] = useState(TASKS);

  function addTask(taskObj){
   const newList = [...list, taskObj]
   setList(newList)
  }
  function handleRemove(text){
    const newList = list.filter((task) => task.text !== text);
    setList(newList)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm addTask={addTask} categories={CATEGORIES} />
      <TaskList handleRemove={handleRemove} list={list} setList={setList} tasks={list} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
